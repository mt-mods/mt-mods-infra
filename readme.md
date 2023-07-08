
MT-Mods infrastructure repo

[![deploy](https://github.com/mt-mods/mt-mods-infra/actions/workflows/deployment.yml/badge.svg)](https://github.com/mt-mods/mt-mods-infra/actions/workflows/deployment.yml)
[![validate](https://github.com/mt-mods/mt-mods-infra/actions/workflows/validate.yml/badge.svg)](https://github.com/mt-mods/mt-mods-infra/actions/workflows/validate.yml)

Currently contains:
* Chat bridge setup and config
* [NodeRED](https://nodered.org/) instance: https://mt-mods.minetest.ch/nodered

# Provisioning/Editing

## Editing the secret config

* Prerequisites: `ansible`

Edit on the command-line (keep the vault-password ready):
```bash
ansible-vault edit host_vars/all.yml
```

## Provision

To provision the compose-file in this repo you need:
* Locally installed `ansible`
* Authorized SSH-Access in the target(s) from the `hosts` file
* The vault-password (in the discord #staff-links channel or ping up @BuckarooBanzay)

To provision everything:
```bash
ansible-playbook -i hosts --ask-vault-pass deploy.yml
```

# Links

* Matterbridge settings: https://github.com/42wim/matterbridge/wiki/Settings
* Matterbridge configs/example: https://github.com/42wim/matterbridge#configuration
* NodeRED configuration: https://nodered.org/docs/user-guide/runtime/configuration
* Infrastructure-provisioning tool: https://github.com/ansible/ansible