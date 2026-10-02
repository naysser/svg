# Harmless SVG parser probes

These files distinguish byte relay from server-side SVG/XML parsing and image rendering. Local-file probes request only `/etc/hostname` or `C:/Windows/win.ini`. `11-loopback-entity.svg` requests only the loopback root. No write, command execution, credential, or cloud-metadata payload is included.

Expected evidence of parsing is substituted file content, a renderer-specific error, or an independently observed secondary request. Returning the source with unresolved entity/reference text proves only byte relay.
