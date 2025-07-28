```diff
--- a/src/types/global.d.ts
+++ b/src/types/global.d.ts
@@ -0,0 +1,5 @@
+interface Window {
+  dataLayer: any[];
+  gtag: (...args: any[]) => void;
+}
+
```