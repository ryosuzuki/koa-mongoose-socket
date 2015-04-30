
module.exports = function (app) {
  app.io.use( function *(next) {
    console.log('Socket.io start (' + this.id + ')');

    /*
      before process
     */

    yield* next;

    /*
      after process
     */

    console.log('Socket.io kill  (' + this.id + ')');
  })
}
