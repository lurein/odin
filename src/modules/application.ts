let application : Application;
class Application {
  public isQuiting : boolean = false;
  public isRecording : boolean = false;
}

if(!application) {
  application = new Application();
}

export default application;
