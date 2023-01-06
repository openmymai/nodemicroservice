# Simple Microservices on Macos
Building applications is more than just meeting the client's needs. Due to the large system size, developers face various challenges, including the maintenance of the codebases, the implementation of new features, bug fixing, and managing user roles. At scale, these considerations are non-trivial, and developers have to use various methods when architecting systems to avoid them.

Monolithic applications commonly encounter these problems, and distributed systems are typically used to alleviate these issues. A distributed system consists of various components spread out over the network that function independently. A distributed application consists of several loosely coupled microservices that work together to meet the user’s needs.

## Benefits of microservice architecture
Since microservices are loosely coupled and have a clearly defined purpose, the application is easier to manage and understand. Here are a few key benefits of using a microservice-based architecture:
- **Scalability** is easy, as you can think of the whole system as a collection of services, each interfacing with other microservices. This allows you to scale up, down, or out based on the resources needed by individual microservices instead of the entire application (i.e., monolithic architecture).
- **Simplified developer experience** so that a new developer joining the team does not have to understand the entire system but only the context of the service they are working on. This improves productivity as they can focus on a single code base and its functionality.
- **Platform independence and flexibility** so that developers can choose the best tools for the job when building services for the system.

## Tech Stack
- TypeScript
- NodeJS
- Ingress NGINX
- Docker
- Kubernetes
- Skaffold
- Macos Docker Desktop
## Running Application
Configure hostname to your prefer.
```
https://github.com/openmymai/nodemicroservice.git
cd nodemicroservice
skaffold dev
```
Browse to http://[hostname]/api/users/currentuser
## Some fixes
From first running, it does not work because it cannot pull ingress-controller image.

<img width="693" alt="Screenshot 2023-01-06 at 12 22 08 AM" src="https://user-images.githubusercontent.com/15844801/210831675-0557c4f6-0e83-4aab-b612-b75385087895.png">

Then using following command to find the error.
```
kubectl describe <error pod>
```
<img width="809" alt="Screenshot 2023-01-06 at 12 33 21 AM" src="https://user-images.githubusercontent.com/15844801/210831893-fd198165-d90d-49bd-a021-6b7c27dee8b4.png">
It display error message.
<img width="1449" alt="Screenshot 2023-01-06 at 12 22 36 AM" src="https://user-images.githubusercontent.com/15844801/210832160-1aa6f8f6-789f-4af2-ad61-b9166519cabd.png">

Then try to pull image using 
```
docker pull <image>
```
<img width="668" alt="Screenshot 2023-01-06 at 12 22 53 AM" src="https://user-images.githubusercontent.com/15844801/210832356-4ccdd0bf-321a-40d5-8fea-b2c8dc2e38f1.png">

Finally, it's work and get "Running".

<img width="634" alt="Screenshot 2023-01-06 at 12 23 06 AM" src="https://user-images.githubusercontent.com/15844801/210832410-2451c3fa-e58f-467b-9c6b-215d9b59b4b4.png">
