---
sidebar_position: 1
title: NixOS Nvidia
tags:
  - nvidia
  - nixos
---

<!-- TOC -->

## nvidia.nix nixpkgs default.nix:

> [!Info] This links include how nvidia package work. I mean, what patches, version etc. by nix code.
> [unstable-nvidia](https://github.com/NixOS/nixpkgs/blob/nixpkgs-unstable/pkgs/os-specific/linux/nvidia-x11/default.nix)
> Learned how to get specific version from above code by [TLATER](https://github.com/TLATER/dotfiles/blob/master/nixos-config/hosts/yui/nvidia/default.nix) dotfiles.

## How to open vaapi on nvidia?

### How to check is it working?

- https://github.com/elFarto/nvidia-vaapi-driver?tab=readme-ov-file#building
  - Hardware decoding only, encoding is [not supported](https://github.com/elFarto/nvidia-vaapi-driver/issues/116).
- Nix command
  - `nix-shell -p libva-utils --run vainfo`
- nvidia-smi
  - Running nvidia-smi while decoding a video should show a Firefox process with C in the Type column. In addition nvidia-smi pmon will show the usage of the decode engine per-process, and nvidia-smi dmon will show the usage per-GPU. When using nvidia open gpu kernel modules, the usage of the decode engine may not be displayed correctly.
- `VAEntrypointVLD` means that your card is capable to decode this format, `VAEntrypointEncSlice` means that you can encode to this format.
- mine:

```python
Trying display: wayland
Trying display: x11
libva info: VA-API version 1.22.0
libva info: Trying to open /run/opengl-driver/lib/dri/nvidia_drv_video.so
libva info: Found init function __vaDriverInit_1_0
libva info: va_openDriver() returns 0
vainfo: VA-API version: 1.22 (libva 2.22.0)
vainfo: Driver version: VA-API NVDEC driver [direct backend]
vainfo: Supported profile and entrypoints
      VAProfileMPEG2Simple            :	VAEntrypointVLD
      VAProfileMPEG2Main              :	VAEntrypointVLD
      VAProfileVC1Simple              :	VAEntrypointVLD
      VAProfileVC1Main                :	VAEntrypointVLD
      VAProfileVC1Advanced            :	VAEntrypointVLD
      VAProfileH264Main               :	VAEntrypointVLD
      VAProfileH264High               :	VAEntrypointVLD
      VAProfileH264ConstrainedBaseline:	VAEntrypointVLD
      VAProfileHEVCMain               :	VAEntrypointVLD
      VAProfileVP8Version0_3          :	VAEntrypointVLD
      VAProfileVP9Profile0            :	VAEntrypointVLD
      VAProfileHEVCMain10             :	VAEntrypointVLD
      VAProfileHEVCMain12             :	VAEntrypointVLD
      VAProfileVP9Profile2            :	VAEntrypointVLD
      VAProfileHEVCMain444            :	VAEntrypointVLD
      VAProfileHEVCMain444_10         :	VAEntrypointVLD
      VAProfileHEVCMain444_12         :	VAEntrypointVLD
```

- Example:

```python
libva info: VA-API version 0.39.4
libva info: va_getDriverName() returns 0
libva info: Trying to open /usr/lib/dri/i965_drv_video.so
libva info: Found init function __vaDriverInit_0_39
libva info: va_openDriver() returns 0
vainfo: VA-API version: 0.39 (libva 1.7.3)
vainfo: Driver version: Intel i965 driver for Intel(R) Skylake - 1.7.3
vainfo: Supported profile and entrypoints
      VAProfileMPEG2Simple            :	VAEntrypointVLD
      VAProfileMPEG2Simple            :	VAEntrypointEncSlice
      VAProfileMPEG2Main              :	VAEntrypointVLD
      VAProfileMPEG2Main              :	VAEntrypointEncSlice
      VAProfileH264ConstrainedBaseline:	VAEntrypointVLD
      VAProfileH264ConstrainedBaseline:	VAEntrypointEncSlice
      VAProfileH264ConstrainedBaseline:	VAEntrypointEncSliceLP
      VAProfileH264Main               :	VAEntrypointVLD
      VAProfileH264Main               :	VAEntrypointEncSlice
      VAProfileH264Main               :	VAEntrypointEncSliceLP
      VAProfileH264High               :	VAEntrypointVLD
      VAProfileH264High               :	VAEntrypointEncSlice
      VAProfileH264High               :	VAEntrypointEncSliceLP
      VAProfileH264MultiviewHigh      :	VAEntrypointVLD
      VAProfileH264MultiviewHigh      :	VAEntrypointEncSlice
      VAProfileH264StereoHigh         :	VAEntrypointVLD
      VAProfileH264StereoHigh         :	VAEntrypointEncSlice
      VAProfileVC1Simple              :	VAEntrypointVLD
      VAProfileVC1Main                :	VAEntrypointVLD
      VAProfileVC1Advanced            :	VAEntrypointVLD
      VAProfileNone                   :	VAEntrypointVideoProc
      VAProfileJPEGBaseline           :	VAEntrypointVLD
      VAProfileJPEGBaseline           :	VAEntrypointEncPicture
      VAProfileVP8Version0_3          :	VAEntrypointVLD
      VAProfileVP8Version0_3          :	VAEntrypointEncSlice
      VAProfileHEVCMain               :	VAEntrypointVLD
      VAProfileHEVCMain               :	VAEntrypointEncSlice
```

<!-- /TOC -->
