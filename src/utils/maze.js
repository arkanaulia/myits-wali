/* eslint-disable no-undef */
/* eslint-disable no-empty */

(function (m, a, z, e) {
   var s, t;
   try {
     t = m.sessionStorage.getItem('maze-us');
   } catch (err) {}
 
   if (!t) {
     t = new Date().getTime();
     try {
       m.sessionStorage.setItem('maze-us', t);
     } catch (err) {}
   }
 
   s = a.createElement('script');
   s.src = z + '?t=' + t + '&apiKey=' + e;
   s.async = true;
   a.getElementsByTagName('head')[0].appendChild(s);
   m.mazeUniversalSnippetApiKey = e;
 })(window, document, 'https://snippet.maze.co/maze-universal-loader.js', 'a5ebfa0c-5b47-49d5-88ed-a65b46515fc3');
 