GIT=git
DOCKER=DOCKER
CONTAINER=Nethr-server

.PHONY: lint format backend

lint: 

format:
	npx prettier --write "**/*.tsx"

backend:
	$(GIT) clone https://github.com/MindsofD23b/Backend.git

	$(MAKE) -C ./Backend build
	$(MAKE) -C ./Backend run

clean:
	-$(DOCKER) stop $(CONTAINER)
	-$(DOCKER) rm $(CONTAINER)
	-powershell -Command "Remove-Item -Path './Backend' -Recurse -Force"
