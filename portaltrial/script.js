<!DOCTYPE html>
<html>
   <head>
      <title>Vintex University of Technology</title>
      <style>
         body {
         font-family: Arial, sans-serif;
         }
         a {
         text-decoration: none;
         }
         #content {
         margin: 0 auto;
         max-width: 800px;
         background-color: #f0f0f0;
         padding: 20px;
         }
         header {
         background-color: #006699;
         color: white;
         padding: 10px 0;
         margin-bottom: 20px;
         }
         header h1 {
         font-size: 2.5em;
         margin: 0;
         padding: 0;
         }
         #main {
         margin-bottom: 20px;
         }
         #main h2 {
         font-size: 1.5em;
         margin-top: 0;
         }
         .section {
         margin-bottom: 20px;
         }
         .section h3 {
         font-size: 1.3em;
         }
         .section p {
         font-size: 0.9em;
         margin: 0;
         }
         footer {
         background-color: #006699;
         color: white;
         padding: 10px 0;
         }
         footer a {
         color: white;
         }
      </style>
   </head>
   <body>
      <div id="content">
         <header>
            <h1>Vintex University of Technology</h1>
         </header>
         <div id="main">
            <h2>Welcome to Vintex University of Technology</h2>
            <div class="section">
               <h3>Courses</h3>
               <p>We offer a variety of courses in technology, engineering, and business.</p>
            </div>
            <div class="section">
               <h3>Faculty</h3>
               <p>Our faculty consists of highly qualified and experienced professionals.</p>
            </div>
            <div class="section">
               <h3>Admission</h3>
               <p>We accept applications from students around the world.</p>
            </div>
         </div>
         <footer>
            <p>Copyright &copy; 2020 Vintex University of Technology | <a href="#">Privacy Policy</a></p>
         </footer>
      </div>
   </body>
   <script type="text/javascript">
      // JavaScript code to initiate the Vintex University of Technology portal
      window.onload = function() {
         // Initialize the portal
         initPortal();
      }
      
      function initPortal() {
         // Create the portal elements
         var portal = document.createElement('div');
         portal.id = 'portal';
         portal.style.position = 'fixed';
         portal.style.left = '50%';
         portal.style.top = '50%';
         portal.style.width = '400px';
         portal.style.height = '400px';
         portal.style.background = '#ccc';
         portal.style.border = '2px solid #000';
         
         // Add the portal to the page
         document.body.appendChild(portal);
         
         // Add the portal content
         var portalContent = '<h1>Vintex University of Technology</h1>';
         portalContent += '<p>Welcome to the Vintex University of Technology portal!</p>';
         portalContent += '<ul>';
         portalContent += '<li><a href="#">Courses</a></li>';
         portalContent += '<li><a href="#">Faculty</a></li>';
         portalContent += '<li><a href="#">Admission</a></li>';
         portalContent += '</ul>';
         
         // Add the content to the portal
         portal.innerHTML = portalContent;
      }
   </script>
</html>