<div align="center">
  <a href="https://www.buymeacoffee.com/maicmi" target="_blank">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me a Coffee" height="45">
  </a>
  <br/>
  <small>If this microservices example helps you learn or build, consider supporting my work!</small>
</div>

<br/>

# Microservices Ticketing App 🎟️

This repository contains a full-stack ticketing application built from the ground up to demonstrate a **microservices architecture**. The system is designed to be scalable, resilient, and maintainable, serving as a practical example for learning advanced backend concepts.

![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

---

## ✨ Architecture Overview

This project is composed of several loosely coupled services that communicate with each other. This approach offers several key benefits over a traditional monolithic architecture:

-   **Scalability**: Each service can be scaled independently based on its specific resource needs, leading to more efficient resource utilization.
-   **Simplified Developer Experience**: New developers can focus on a single service and its functionality without needing to understand the entire system, boosting productivity.
-   **Flexibility & Independence**: Each microservice can potentially use a different technology stack, allowing developers to choose the best tool for the job.

### Services Included:
-   **Auth Service**: Manages user sign-up, sign-in, and authentication.
-   **Tickets Service**: Handles creation, updates, and retrieval of tickets.
-   **Orders Service**: Manages the process of ordering tickets.
-   **Expiration Service**: A background worker to handle ticket reservation expirations.
-   **Payments Service**: Processes payments for orders.
-   ... and more, all communicating via an event bus.

---

## 🛠️ Tech Stack

-   **Backend**: Node.js, Express.js
-   **Frontend**: Next.js, React
-   **Language**: TypeScript
-   **Database**: MongoDB
-   **Containerization**: Docker
-   **Orchestration**: Kubernetes
-   **Development Workflow**: Skaffold
-   **API Gateway**: Ingress-NGINX

---

## 🚀 Getting Started

Follow these steps to get the entire application running locally on your machine.

### Prerequisites

-   [Docker Desktop](https://www.docker.com/products/docker-desktop/) with Kubernetes enabled.
-   [Skaffold](https://skaffold.dev/docs/install/) installed on your machine.
-   [Node.js](https://nodejs.org/) and npm.

### 1. Configure Your Hosts File

For Ingress-NGINX to route traffic correctly on your local machine, you need to map a custom domain to your localhost IP.

-   Open your hosts file:
    -   **macOS/Linux**: `/etc/hosts`
    -   **Windows**: `C:\Windows\System32\drivers\etc\hosts`
-   Add the following line to the end of the file:
    ```
    127.0.0.1   ticketing.dev
    ```
    *(You can use any domain you like, but this README will use `ticketing.dev`)*

### 2. Set Up Ingress-NGINX Controller

The Ingress controller acts as the entry point to your Kubernetes cluster, routing external requests to the correct services.

-   Apply the official NGINX Ingress manifest to your cluster. This command sets up all the necessary resources.
    ```bash
    kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/cloud/deploy.yaml
    ```
-   Wait a minute or two for the controller to be fully up and running. You can check its status with `kubectl get pods -n ingress-nginx`.

### 3. Launch the Application

Now you are ready to launch the entire microservices stack.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/openmymai/nodemicroservice.git
    cd nodemicroservice
    ```

2.  **Start the development environment:**
    ```bash
    skaffold dev
    ```
    Skaffold will now build all the Docker images, deploy them to your Kubernetes cluster, and watch for file changes to enable hot-reloading. This process may take several minutes on the first run.

---

## ✅ Accessing the Application

Once Skaffold reports that all services are running and stable, you can access the application in your browser:

-   **Main Application**: [http://ticketing.dev](http://ticketing.dev)

You can also test individual API endpoints, for example:
-   **Sign-up endpoint**: [http://ticketing.dev/api/users/signup](http://ticketing.dev/api/users/signup)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Please feel free to check the issues page.

## 📜 License

This project is available for educational purposes. Please refer to the license details within the repository.
