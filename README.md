# Simple Microservice on Macos

### Tech Stack
- TypeScript
- NodeJS
- Ingress NGINX
- Docker
- Kubernetes
- Skaffold
- Macos Docker Desktop

### Some fix
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
