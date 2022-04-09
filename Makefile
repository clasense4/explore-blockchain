SHELL :=/bin/bash

.DEFAULT_GOAL := help
help: ## Show this help
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

install: ## Build the Docker image and install NPM packages
	@echo -e "\nBuild Docker image"
	@docker build -t saladventures:node .
	@echo -e "\nInstall NPM Packages"
	@docker run --rm --interactive --tty --volume $(PWD):/usr/src/app saladventures:node npm install

bash: ## Run bash inside the docker image
	@echo -e "\nEntering the Container via Bash"
	@docker run --rm --interactive --tty --volume $(PWD):/usr/src/app saladventures:node bash

problem1: ## Run the Problem 1: Three ways to sum to n
	@echo -e "\nThree ways to sum to n"
	@docker run --rm --interactive --tty --volume $(PWD):/usr/src/app saladventures:node node problem_1/sum_to_n.js

problem3: ## Run the Problem 3: Datasource Connector Tool
	@echo -e "\nDatasource Connector Tool"
	@docker run --rm --interactive --tty --volume $(PWD):/usr/src/app saladventures:node node problem_3/data_source.js

problem4: ## Run the Problem 4: Interacting with Chain
	@echo -e "\nInteracting with Chain"
	@docker run --rm --interactive --tty --volume $(PWD):/usr/src/app -e BSC_RPC_URL=$(BSC_RPC_URL) saladventures:node ./node_modules/.bin/ts-node problem_4/retrieve-holders.ts