@@ .. @@
           </div>
         </div>
 
-        {/* Small email text */}
-        <p className="text-gray-500 text-sm mt-6 text-center">
-          will@pattern3.com
-        </p>
        {/* Vimeo Video Embed */}
        <div style={{ margin: '2rem 0' }}>
          <div style={{ padding: '56.25% 0 0 0', position: 'relative', borderRadius: '12px', overflow: 'hidden' }}>
            <iframe 
              src="https://player.vimeo.com/video/1099434802?badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} 
              title="What is Pattern3?"
            />
          </div>
        </div>
+        {/* Video Section */}
+        <div className="mt-12 mb-16">
+          <div className="max-w-4xl mx-auto">
+            <div 
+              className="relative w-full overflow-hidden rounded-2xl shadow-lg"
+              style={{ paddingBottom: '56.25%' }}
+            >
+              <iframe 
+                src="https://player.vimeo.com/video/1099434802?badge=0&autopause=0&player_id=0&app_id=58479" 
+                className="absolute top-0 left-0 w-full h-full"
+                frameBorder="0" 
+                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
+                title="What is Pattern3?"
+              />
+            </div>
+          </div>
+        </div>
+
+        {/* Light divider */}
+        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-16"></div>
       </div>
 
       {/* How to Reach Us Section */}