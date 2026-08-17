package main

import (
	"bufio"
	"log"
	"net/http"
	"os"
	"strings"

	"portfolio/api" // Imports our Vercel Go handler package
)

// isBlocked checks if a request path should be blocked for security (e.g. backend source code, env files)
func isBlocked(path string) bool {
	p := strings.ToLower(path)

	// Split path parts to inspect directories and filenames
	parts := strings.Split(p, "/")
	for _, part := range parts {
		// Block hidden files (starting with dot) like .git, .gitignore, .env
		if strings.HasPrefix(part, ".") {
			return true
		}
	}

	// Block sensitive files and backend source code
	if strings.HasSuffix(p, ".go") ||
		strings.HasSuffix(p, ".mod") ||
		strings.HasSuffix(p, ".sum") ||
		strings.HasPrefix(p, "/api") ||
		p == "/env" ||
		strings.HasSuffix(p, "/.env") {
		return true
	}

	return false
}

// loadEnv reads the local .env file and sets environment variables for local testing
func loadEnv() {
	file, err := os.Open(".env")
	if err != nil {
		// No .env file or cannot open; skip (expected in production Vercel environments)
		return
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := strings.TrimSpace(scanner.Text())
		if line == "" || strings.HasPrefix(line, "#") {
			continue
		}
		parts := strings.SplitN(line, "=", 2)
		if len(parts) == 2 {
			key := strings.TrimSpace(parts[0])
			val := strings.TrimSpace(parts[1])
			// Strip surrounding quotes if present
			val = strings.Trim(val, `"'`)
			os.Setenv(key, val)
		}
	}
	if err := scanner.Err(); err != nil {
		log.Printf("Error scanning .env file: %v", err)
	}
}

func main() {
	// Load local environment variables from .env
	loadEnv()

	mux := http.NewServeMux()

	// Route for the contact form API
	mux.HandleFunc("/api/send", handler.Handler)

	// File server for static assets in the root folder
	fileServer := http.FileServer(http.Dir("."))

	// Handle all static assets with a security middleware wrapper
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		path := r.URL.Path

		if isBlocked(path) {
			log.Printf("Security: Blocked access to %s from %s", path, r.RemoteAddr)
			http.Error(w, "404 Not Found", http.StatusNotFound)
			return
		}

		// Serve index.html by default for the root URL
		if path == "/" {
			http.ServeFile(w, r, "./index.html")
			return
		}

		// Serve standard static files
		fileServer.ServeHTTP(w, r)
	})

	// Get port from environment or fallback to 8080
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Portfolio local server running at http://localhost:%s", port)
	err := http.ListenAndServe(":"+port, mux)
	if err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}
