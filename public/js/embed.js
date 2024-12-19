(function () {
    class CustomLet {
      constructor(config) {
        this.config = config;
        this.loadWidget();
      }
  
      loadWidget() {
        const { widgetType, options } = this.config;
        const widgetScript = document.createElement("script");
        widgetScript.src = `http://localhost:8000/js/widgets/${widgetType}.js`;
        widgetScript.onload = () => {
          if (window.CustomLetWidgets && window.CustomLetWidgets[widgetType]) {
            window.CustomLetWidgets[widgetType](options);
          }
        };
        document.body.appendChild(widgetScript);
      }
    }
  
    window.CustomLet = CustomLet;
  })();