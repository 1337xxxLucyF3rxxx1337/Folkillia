---
sidebar_position: 1
title: NixOS Troubleshooting
tags:
  - nixos
---

<!-- TOC -->

- ​`Documents/result/`​ folder seems work for home-manager. I probably made mistake about that.
- syncthing was giving folder marker missing error:
  - That's happens when _.stfolder_ isn't available inside synced folder.
    - fixed when I `rsync -avz /mnt/@home/Documents ~/`​
- Nix try to compile every packages and use %100 CPU
  - Trying looking at top or htop output and see if there are processes owned by users named “nixbld”, if so, this mean nixos is rebuilding something.
    - I was able to solve the problem of some packages not being able to be derived with this code, but I'm no longer experiencing that kind of issue now. Maybe those packages causing the derivation issue are no longer in Nix's repository.
      - ​`nixos-rebuild --use-remote-sudo switch`​
- borgbackup handle with systemd-timer because anacron not available for nixos, fcron probably hard more than systemd-timers
  - I handled this via persist option on systemd-timers and it's work like a anacron. It would start service as soon as possible if time is passed with that option.

## Nvidia

### Black screen waking up from suspend/sleep

- Current boot cmdline: `loglevel=4 nvidia-drm.modeset=1 nvidia-drm.fbdev=1 nvidia.NVreg_OpenRmEnableUnsupportedGpus=1`
- 550.135-open, 565.77-open still cause black screen after waking up from suspend
- 550.134 nvidia propriety version work without suspend issue.
  - environment.variable enabled
  - powermanagement enabled
  - modesetting enabled
  - package production version.
  - specific boot kernel module not used.

## Boot Issues

### How to Create a New Boot from Live ISO When You Lose Your Boot Generation?

- Boot into the live USB
- Mount your system into `/mnt`
- Run
  ```
  sudo nixos-enter
  ```
- Run

```
NIXOS_INSTALL_BOOTLOADER=1 /run/current-system/bin/switch-to-configuration boot
```

## Flake Issues

### The option doesn't exist when you add it to flakes?

- It was a location issue, handled on the flake.nix

### Solve sha256 mismatch problem on flake

- Make sure to update flake.lock, but sometimes developers make a mistake by not changing the new hash for packages, e.g., ollama. Therefore, you need to wait for them to add new hashes on the nixos-unstable branch on GitHub. If they push the new hash, you can solve that problem by updating `flake.lock` and rebuilding unstable via upgrade.

## Other Issues

### How to Rollback after issue with last generation?

### Rollback files, packages via flake:

#### Revert back flake.lock

1. revert via git
2. Rebuild again.
3. Test the generation and if it's work change that to default boot:

```python
sudo nix-env --profile /nix/var/nix/profiles/system --switch-generation 189
```

4. Check is it selected generation 189:

```python
ll /nix/var/nix/profiles
# would show something like this:
lrwxrwxrwx 1 root root   15 Eyl 29 18:40 system -> system-189-link
```

### How to delete generation?

```python
sudo nix-env --profile /nix/var/nix/profiles/system --delete-generations 190 191 192 193 194 195
```

## How to solve `{` or "=" unexpected errors?

- If you're trying to add a new module to Home Manager, imports won't work. You need to declare your `programs.<package>` directly in `home.nix` to see the correct error.

## Boot is world accessible, which is a security hole!

- ???

## How to solve lua-language-server error on neovim?

1. Install lua-language-server as a package.
2. Learn location of bin file `which lua-language-server`
3. Setup this on `.local/share/nvim/mason/bin/lua-language-server`.

```bash
#!/usr/bin/env bash
exec "/run/current-system/sw/bin/lua-language-server" "$@"
#exec "/home/developer/.nix-profile/bin/lua-language-server"

#old path give error
#exec "/home/developer/.local/share/nvim/mason/packages/lua-language-server/libexec/bin/lua-language-server" "$@"
```

## File chooser not work on firefox?

- It's working now; I was mistaken in my previous attempt with Firefox.nix, as I added `xdg-desktop-portal` to Firefox instead of `portal-gtk`, but without it, Firefox uses the desktop portal out of the box.

<!-- /TOC -->
