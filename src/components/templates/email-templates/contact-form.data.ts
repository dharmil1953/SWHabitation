export default `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{subject}} | SW Habitation</title>
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,200;0,9..40,300;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;1,9..40,200;1,9..40,300;1,9..40,400;1,9..40,500;1,9..40,600;1,9..40,700;1,9..40,800;1,9..40,900&display=swap"
      rel="stylesheet"
    />
    <style>

    @font-face {
      font-family: "Montserrat";
      src: url(https://jamstacky.com/fonts/Montserrat-Black.ttf) format("ttf");
    }

    @font-face {
      font-family: "Montserrat";
      src: url(https://jamstacky.com/fonts/Montserrat-BlackItalic.ttf) format("ttf");
    }

    @font-face {
      font-family: "Montserrat";
      src: url(https://jamstacky.com/fonts/Montserrat-Bold.ttf) format("ttf");
    }

    @font-face {
      font-family: "Montserrat";
      src: url(https://jamstacky.com/fonts/Montserrat-BoldItalic.ttf) format("ttf");
    }

    @font-face {
      font-family: "Montserrat";
      src: url(https://jamstacky.com/fonts/Montserrat-ExtraBold.ttf) format("ttf");
    }

    @font-face {
      font-family: "Montserrat";
      src: url(https://jamstacky.com/fonts/Montserrat-ExtraBoldItalic.ttf) format("ttf");
    }

    @font-face {
      font-family: "Montserrat";
      src: url(https://jamstacky.com/fonts/Montserrat-ExtraLight.ttf) format("ttf");
    }

    @font-face {
      font-family: "Montserrat";
      src: url(https://jamstacky.com/fonts/Montserrat-ExtraLightItalic.ttf) format("ttf");
    }

    @font-face {
      font-family: "Montserrat";
      src: url(https://jamstacky.com/fonts/Montserrat-Italic.ttf) format("ttf");
    }

    @font-face {
      font-family: "Montserrat";
      src: url(https://jamstacky.com/fonts/Montserrat-Light.ttf) format("ttf");
    }

    @font-face {
      font-family: "Montserrat";
      src: url(https://jamstacky.com/fonts/Montserrat-LightItalic.ttf) format("ttf");
    }

    @font-face {
      font-family: "Montserrat";
      src: url(https://jamstacky.com/fonts/Montserrat-Medium.ttf) format("ttf");
    }

    @font-face {
      font-family: "Montserrat";
      src: url(https://jamstacky.com/fonts/Montserrat-MediumItalic.ttf) format("ttf");
    }

    @font-face {
      font-family: "Montserrat";
      src: url(https://jamstacky.com/fonts/Montserrat-Regular.ttf) format("ttf");
    }

    @font-face {
      font-family: "Montserrat";
      src: url(https://jamstacky.com/fonts/Montserrat-SemiBold.ttf) format("ttf");
    }

    
       body {
         font-family: "Montserrat", Arial, sans-serif !important;
       }

       @media only screen and (max-width: 640px) {
        .welcome-title{
            font-size: 30px !important;
        } 
        .welcome-img{
            padding: 2em !important;
        }
        .contact-detailes-section{
           padding: 2em  1em !important;
        }
        .logo{
           max-width: 10em !important;
        }
        .welcome-section{
            padding: 0.5em !important;
        }
        .top-logo-section{
            padding: 2.5em 0  !important;
        }
      }
      
      
    </style>
  </head>

  <body
    style="
      background-color: #f9fafb;
      font-size: 16px;
      font-weight: 400;
      line-height: inherit;
      max-width: 100%;
      width: 100%;
      overflow-x: hidden;
    "
  >
    <div style="background-color: #f9fafb; height: 100%; width: 100%">
      <div style="margin: 4em 0 4em; width: 100%">
        <div style="margin: 0 auto; max-width: 90%; width: 100%">
          <div
            style="
              align-items: center;
              border: 2px solid rgba(33, 44, 51, 0.04);
              max-width: 600px;
              margin: 0 auto;
              width: 100%;
              background: linear-gradient(111deg, #232E52 16.88%, #111820 100.94%);
            "
          >
          <div style="background: linear-gradient(238deg, #232E52 16.88%, #111820 100.94%); text-align: center; padding: 4.5em 0;" class="top-logo-section">
            <a href="https://swhabitation.com/" target="_blank"> 
              <img src="https://sw-habitation-dev.vercel.app/assets/images/sw-logo.png" alt="sw-logo" style="text-align: center; max-width: 16.5em; width: 100%;" class="logo">
            </a>
          </div>
            <div
              style="
                margin: 3em 0 8em;
                overflow-y: auto;
                padding: 1em;
                position: relative;
                margin: 0 auto;
              "
              class="welcome-section"
            >
             <div style="text-align: center; padding: 4.8em 0;" class="welcome-img">
              <img src="https://sw-habitation-dev.vercel.app/assets/images/welcome.png" alt="welcome-img" style="text-align: center; max-width: 20.4em; width: 100%;"> 
             </div>
              <h2 style="text-align: center; text-transform: uppercase; font-size: 42px; font-weight: 400; background: linear-gradient(90deg, #16D9E3 0%, #30C7EC 47%, #46AEF7 100%);
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;" class="welcome-title">CLIENT CONTACT FORM</h2>
            

              <div style="background:  linear-gradient(238deg, #232E52 16.88%, #111820 100.94%); padding: 2em; border-radius: 5px;" class="contact-detailes-section">
                <p style="text-align: center; background: linear-gradient(90deg, #FDFCFB 0%, #E2D1C3 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent; margin: 0;">{{subject}}</p>
                <table style="width: 100%; padding-top: 2em;">
                  <tr style="display: block; align-items: center; border-bottom: 1px solid #31394D; padding-bottom: 10px;">
                    <td style="display: inline-block; max-width: 4.8em; width: 100%;">
                      <label
                        for="name"
                        style="font-size: 16px; font-weight: 300; background: linear-gradient(90deg, #FDFBFB 0%, #EBEDEE 100%);
                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;"
                        class="title"
                      >
                        Name 
                      </label>
                    </td>
                    <td style=" display: inline-block;">
                      <div
                        style="font-size: 16px; font-weight: 500; background: linear-gradient(90deg, #F5F7FA 0%, #C3CFE2 100%);
                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;"
                        class="subTitle"
                      >
                        {{name}}
                      </div>
                    </td>
                  </tr>
                  <tr style="display: block; align-items: center; border-bottom: 1px solid #31394D; padding-bottom: 10px;">
                  <td style="display: inline-block; max-width: 4.8em; width: 100%;">
                    <label
                      for="name"
                      style="font-size: 16px; font-weight: 300; background: linear-gradient(90deg, #FDFBFB 0%, #EBEDEE 100%);
                      background-clip: text;
                      -webkit-background-clip: text;
                      -webkit-text-fill-color: transparent;"
                      class="title"
                    >
                    Phone Number  
                    </label>
                  </td>
                  <td style=" display: inline-block;">
                    <div
                      style="font-size: 16px; font-weight: 500; background: linear-gradient(90deg, #F5F7FA 0%, #C3CFE2 100%);
                      background-clip: text;
                      -webkit-background-clip: text;
                      -webkit-text-fill-color: transparent;"
                      class="subTitle"
                    >
                      {{phoneNumber}}
                    </div>
                  </td>
                </tr>
                  <tr style="display: block; align-items: center; border-bottom: 1px solid #31394D; padding-bottom: 10px; padding-top: 20px;">
                    <td style="display: inline-block; max-width: 4.8em; width: 100%;">
                      <label
                        for="email"
                        style="font-size: 16px; font-weight: 300; background: linear-gradient(90deg, #FDFBFB 0%, #EBEDEE 100%);
                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;"
                        class="title"
                      >
                        Email 
                      </label>
                    </td>
                    <td style="display: inline-block;">
                      <div
                        style="font-size: 16px; font-weight: 500; background: linear-gradient(90deg, #F5F7FA 0%, #C3CFE2 100%);
                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;"
                        class="subTitle"
                      >
                        {{email}}
                      </div>
                    </td>
                  </tr>
                  <tr style="display: block; align-items: center;  padding-top: 20px;">
                    <td style="display: inline-block; max-width: 4.8em; width: 100%;">
                      <label
                        for="Roll No."
                        style="font-size: 16px; font-weight: 300; background: linear-gradient(90deg, #FDFBFB 0%, #EBEDEE 100%);
                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;"
                        class="title"
                      >
                        Message 
                      </label>
                    </td>
                    <td style="display: inline-block;">
                      <div
                        style="font-size: 16px; font-weight: 500; background: linear-gradient(90deg, #F5F7FA 0%, #C3CFE2 100%);
                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;"
                        class="subTitle"
                      >
                        {{message}}
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
`