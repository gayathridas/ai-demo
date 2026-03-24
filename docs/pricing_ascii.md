# Header ASCII Layout: Pricing Tab

This document illustrates the visual changes to the navigation header upon adding the "Pricing" tab.

## 1. Before (Current Layout)

```text
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  [Logo] AINexus                            [Features]   [Capabilities]  [Sign In] |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

## 2. After (Proposed Layout)

```text
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  [Logo] AINexus                  [Features]   [Capabilities]   [Pricing] [Sign In]|
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

## Details
- **Alignment:** The navigation links ("Features", "Capabilities", "Pricing") remain horizontally centered relative to the available flex space, while the Logo stays left-aligned and the Sign In button stays right-aligned.
- **Spacing:** The elements will maintain the `gap: 2rem` flex spacing defined in `styles.css`.
