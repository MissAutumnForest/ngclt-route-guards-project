import { Injectable }    from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable }    from 'rxjs';

import { LootComponent } from '../../components/loot/loot.component';

@Injectable()
export class OrlyGuard implements CanDeactivate<LootComponent> {
  canDeactivate(component: LootComponent) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
