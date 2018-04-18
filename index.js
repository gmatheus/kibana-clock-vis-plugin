export default function (kibana) {

  return new kibana.Plugin({
    uiExports: {
      visTypes: [
        'plugins/clock_vis/clock_vis'
      ]
    }
  });

}
