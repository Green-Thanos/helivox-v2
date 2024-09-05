import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  mainContent: string;
  unsubscribeUrl: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  mainContent,
  unsubscribeUrl,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#ffffff",
      color: "#333333",
    }}
  >
    <header
      style={{
        borderBottom: "2px solid #f0f0f0",
        paddingBottom: "10px",
        marginBottom: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#1a1a1a",
        }}
      >
        Morning Buzz
      </h1>
    </header>

    <main>
      <p style={{ fontSize: "16px", lineHeight: "1.5" }}>Hey {firstName},</p>

      <div
        style={{
          fontSize: "16px",
          lineHeight: "1.6",
          marginTop: "20px",
          marginBottom: "20px",
        }}
        dangerouslySetInnerHTML={{ __html: mainContent }}
      />
    </main>

    <footer
      style={{
        borderTop: "2px solid #f0f0f0",
        paddingTop: "20px",
        marginTop: "20px",
        fontSize: "14px",
        color: "#666666",
      }}
    >
      <p>That&apos;s all for today. See you tomorrow</p>
      <p style={{ marginTop: "20px" }}>
        <a
          href={unsubscribeUrl}
          style={{
            color: "#999999",
            textDecoration: "underline",
          }}
        >
          Unsubscribe
        </a>
      </p>
    </footer>
  </div>
);
