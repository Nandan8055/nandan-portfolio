package handler

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"github.com/resend/resend-go/v3"
)

// ContactRequest represents the incoming JSON body from the contact form
type ContactRequest struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Phone   string `json:"phone,omitempty"`
	Message string `json:"message"`
}

// Handler is the entry point for Vercel Go Serverless Functions
func Handler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		w.Header().Set("Allow", "POST")
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusMethodNotAllowed)
		w.Write([]byte(`{"error": "Method Not Allowed"}`))
		return
	}

	var req ContactRequest
	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(`{"error": "Invalid request body"}`))
		return
	}

	// Validate required fields
	if req.Name == "" || req.Email == "" || req.Phone == "" || req.Message == "" {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(`{"error": "Missing required parameters (name, email, phone, message)"}`))
		return
	}

	// Retrieve API key securely from environment variables
	apiKey := os.Getenv("RESEND_API_KEY")
	if apiKey == "" {
		fmt.Println("Error: RESEND_API_KEY is not set in environment variables.")
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(`{"error": "Mail server is not configured. Please set the RESEND_API_KEY environment variable."}`))
		return
	}

	// Prepare dynamic HTML body for the email
	phoneHTML := ""
	if req.Phone != "" {
		phoneHTML = fmt.Sprintf(`<p style="margin: 16px 0;"><strong>Phone:</strong> %s</p>`, req.Phone)
	}

	htmlContent := fmt.Sprintf(`
		<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
			<h2 style="color: #111; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 0;">New Contact Form Submission</h2>
			<p style="margin: 16px 0;"><strong>Name:</strong> %s</p>
			<p style="margin: 16px 0;"><strong>Email:</strong> <a href="mailto:%s">%s</a></p>
			%s
			<div style="margin-top: 24px; padding: 16px; background-color: #f9f9f9; border-radius: 6px; border-left: 4px solid #e50914;">
				<p style="margin: 0; font-weight: bold; color: #555; margin-bottom: 8px;">Message:</p>
				<p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #222;">%s</p>
			</div>
		</div>
	`, req.Name, req.Email, req.Email, phoneHTML, req.Message)

	// Create Resend Client
	client := resend.NewClient(apiKey)

	// Build Resend SendEmailRequest params
	params := &resend.SendEmailRequest{
		From:    "onboarding@resend.dev",
		To:      []string{"nandan.b.muralidhar@gmail.com"},
		Subject: fmt.Sprintf("New Portfolio Message from %s", req.Name),
		Html:    htmlContent,
	}

	// Send email using official Resend SDK
	sent, err := client.Emails.Send(params)
	if err != nil {
		fmt.Printf("Resend API Call Error: %v\n", err)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(fmt.Sprintf(`{"error": "%s"}`, err.Error())))
		return
	}

	// Respond with success and the email ID
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	responsePayload, _ := json.Marshal(map[string]string{"id": sent.Id})
	w.Write(responsePayload)
}
