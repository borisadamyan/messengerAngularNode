/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from './message.component';
import * as i3 from './message.service';
const styles_MessageComponent:any[] = ['.author[_ngcontent-%COMP%] {\n            display: inline-block;\n            font-style: italic;\n            font-size: 12px;\n            width: 80%;\n        }\n\n        .config[_ngcontent-%COMP%] {\n            display: inline-block;\n            text-align: right;\n            font-size: 12px;\n            width: 19%;\n        }'];
export const RenderType_MessageComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:0,
    styles:styles_MessageComponent,data:{}});
function View_MessageComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),7,'div',[['class',
      'config']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),i0.ɵeld(2,0,(null as any),
          (null as any),1,'a',([] as any[]),(null as any),[[(null as any),'click']],
          (_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.onEdit()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['Edit'])),
      (_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),i0.ɵeld(5,0,(null as any),
          (null as any),1,'a',([] as any[]),(null as any),[[(null as any),'click']],
          (_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.onDelete()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['Delete'])),
      (_l()(),i0.ɵted(-1,(null as any),['\n        ']))],(null as any),(null as any));
}
export function View_MessageComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),13,'article',[['class',
      'panel panel-default']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n    '])),(_l()(),i0.ɵeld(2,
      0,(null as any),(null as any),1,'div',[['class','panel-body']],(null as any),
      (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(3,
      (null as any),['\n        ','\n    '])),(_l()(),i0.ɵted(-1,(null as any),['\n    '])),
      (_l()(),i0.ɵeld(5,0,(null as any),(null as any),7,'footer',[['class','panel-footer']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),i0.ɵeld(7,0,(null as any),
          (null as any),1,'div',[['class','author']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted(8,(null as any),['\n            ',
          '\n        '])),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_MessageComponent_1)),
      i0.ɵdid(11,16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n    '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n']))],(_ck,_v) => {
    var _co:i2.MessageComponent = _v.component;
    const currVal_2:any = _co.belongsToUser();
    _ck(_v,11,0,currVal_2);
  },(_ck,_v) => {
    var _co:i2.MessageComponent = _v.component;
    const currVal_0:any = _co.message.content;
    _ck(_v,3,0,currVal_0);
    const currVal_1:any = _co.message.username;
    _ck(_v,8,0,currVal_1);
  });
}
export function View_MessageComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'app-message',
      ([] as any[]),(null as any),(null as any),(null as any),View_MessageComponent_0,
      RenderType_MessageComponent)),i0.ɵdid(1,49152,(null as any),0,i2.MessageComponent,
      [i3.MessageService],(null as any),(null as any))],(null as any),(null as any));
}
export const MessageComponentNgFactory:i0.ComponentFactory<i2.MessageComponent> = i0.ɵccf('app-message',
    i2.MessageComponent,View_MessageComponent_Host_0,{message:'message'},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2JvcmFtb3MvRGVza3RvcC9Nb3NoIFByb2dyYW1taW5nL21hdGVyaWFscy8wMSBHZXR0aW5nIFN0YXJ0ZWQvYXR0YWNoZWRfZmlsZXMvMDA2IFNldHRpbmcgdXAgdGhlIENvdXJzZSBQcm9qZWN0L3NlZWQtcHJvamVjdC9hc3NldHMvYXBwL21lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL2JvcmFtb3MvRGVza3RvcC9Nb3NoIFByb2dyYW1taW5nL21hdGVyaWFscy8wMSBHZXR0aW5nIFN0YXJ0ZWQvYXR0YWNoZWRfZmlsZXMvMDA2IFNldHRpbmcgdXAgdGhlIENvdXJzZSBQcm9qZWN0L3NlZWQtcHJvamVjdC9hc3NldHMvYXBwL21lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIiwibmc6Ly8vVXNlcnMvYm9yYW1vcy9EZXNrdG9wL01vc2ggUHJvZ3JhbW1pbmcvbWF0ZXJpYWxzLzAxIEdldHRpbmcgU3RhcnRlZC9hdHRhY2hlZF9maWxlcy8wMDYgU2V0dGluZyB1cCB0aGUgQ291cnNlIFByb2plY3Qvc2VlZC1wcm9qZWN0L2Fzc2V0cy9hcHAvbWVzc2FnZXMvbWVzc2FnZS5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL2JvcmFtb3MvRGVza3RvcC9Nb3NoIFByb2dyYW1taW5nL21hdGVyaWFscy8wMSBHZXR0aW5nIFN0YXJ0ZWQvYXR0YWNoZWRfZmlsZXMvMDA2IFNldHRpbmcgdXAgdGhlIENvdXJzZSBQcm9qZWN0L3NlZWQtcHJvamVjdC9hc3NldHMvYXBwL21lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzLk1lc3NhZ2VDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8YXJ0aWNsZSBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICB7e21lc3NhZ2UuY29udGVudH19XG4gICAgPC9kaXY+XG4gICAgPGZvb3RlciBjbGFzcz1cInBhbmVsLWZvb3RlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aG9yXCI+XG4gICAgICAgICAgICB7e21lc3NhZ2UudXNlcm5hbWV9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpZ1wiICpuZ0lmPVwiYmVsb25nc1RvVXNlcigpXCI+XG4gICAgICAgICAgICA8YSAoY2xpY2spPVwib25FZGl0KClcIj5FZGl0PC9hPlxuICAgICAgICAgICAgPGEgKGNsaWNrKT1cIm9uRGVsZXRlKClcIj5EZWxldGU8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuPC9hcnRpY2xlPiIsIjxhcHAtbWVzc2FnZT48L2FwcC1tZXNzYWdlPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDUVE7TUFBQTtNQUE0QyxzREFDeEM7VUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFHO2NBQUE7Y0FBQTtZQUFBO1lBQUg7VUFBQSxnQ0FBc0I7TUFBUSxzREFDOUI7VUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFHO2NBQUE7Y0FBQTtZQUFBO1lBQUg7VUFBQSxnQ0FBd0I7TUFBVTs7O29CQVY5QztNQUFBO01BQUEsZ0JBQXFDLDhDQUNqQztNQUFBO01BQUEsMERBQXdCO01BQUEsd0NBRWxCO01BQ047VUFBQTtNQUE2QixrREFDekI7VUFBQTtVQUFBLDhCQUFvQjtVQUFBLGdCQUVkLGtEQUNOO2lCQUFBO2FBQUE7VUFBQSxpQ0FHTTtNQUNEOztJQUplO0lBQXBCLFlBQW9CLFNBQXBCOzs7SUFQb0I7SUFBQTtJQUlBO0lBQUE7Ozs7b0JDTDVCO01BQUE7aUNBQUEsVUFBQTtNQUFBOzs7In0=