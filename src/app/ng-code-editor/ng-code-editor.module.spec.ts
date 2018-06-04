import { NgCodeEditorModule } from './ng-code-editor.module';

describe('NgCodeEditorModule', () => {
  let ngCodeEditorModule: NgCodeEditorModule;

  beforeEach(() => {
    ngCodeEditorModule = new NgCodeEditorModule();
  });

  it('should create an instance', () => {
    expect(ngCodeEditorModule).toBeTruthy();
  });
});
