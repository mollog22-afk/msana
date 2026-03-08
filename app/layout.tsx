import { ClerkProvider, SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <ClerkProvider>
          <header style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            padding: '1rem', 
            background: '#2d5a27', 
            color: 'white',
            alignItems: 'center'
          }}>
            <h1 style={{margin: 0}}>Mens sana in corpore sano</h1>
            <nav style={{ display: 'flex', gap: '15px' }}>
              <Show when="signed-out">
                <SignInButton />
                <SignUpButton />
              </Show>
              <Show when="signed-in">
                <UserButton />
              </Show>
            </nav>
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
