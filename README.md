Microfrontend Architecture - Host & Remote Apps

Overview

This project demonstrates a Microfrontend Architecture using Module Federation. 
The host application dynamically loads remote applications at runtime, enabling independent deployments while maintaining seamless integration.

🚀 Tech Stack

Tools & Frameworks Used: Host & Remote Apps: React + Webpack Module Federation

Build Tool: Webpack 5

Styling: Basic CSS

🔧 Setup & Run the Application

1️⃣ Clone the Repository

2️⃣ Install Dependencies

Run the following command inside each project (host & remotes):

npm install

3️⃣ Start Remote Apps First

Start the remote applications on different ports:

4️⃣ Start the Host Application

Once remotes are running, start the host:

⚠️ Trade-offs & Challenges

Performance Overhead: Multiple microfrontends mean extra network requests.

Version Mismatch Issues: Remote apps must be compatible with the host app’s API.
