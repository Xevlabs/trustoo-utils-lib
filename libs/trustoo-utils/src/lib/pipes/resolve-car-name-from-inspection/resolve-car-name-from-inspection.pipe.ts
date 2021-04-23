import { Pipe, PipeTransform } from '@angular/core';
import { InspectionModel } from '../../models/inspection.model'

@Pipe({
  name: 'resolveCarNameFromInspection'
})
export class ResolveCarNameFromInspectionPipe implements PipeTransform {

    transform(inspection: InspectionModel, ...type: string[]): unknown {
        const detailsPage = inspection?.pages.find(page => page.pageSlug === 'registration-certificate') ||
            inspection?.pages.find(page => page.pageSlug === 'vehicle-characteristics')
        if (detailsPage)  {
            const brand = detailsPage.components.find(component => component.id === 20111)?.value
            const model = detailsPage.components.find(component => component.id === 20112)?.value
            if (!!brand && !!model) {
                if (type[0] ==='complete') {
                    const dateStamp = detailsPage.components.find(component => component.id === 20105)?.value
                    if (dateStamp) {
                        const date = new Date(dateStamp.seconds * 1000)
                        return `${brand} ${model} ${date.getFullYear()}`;
                    }
                    return `${brand} ${model} ${inspection.mission.ask.carYear}`;
                }
                return `${brand} ${model}`;
            }
        }
        return `${inspection?.mission.ask.brand} ${inspection?.mission.ask.model} ${type[0] ==='complete' ?
            inspection?.mission.ask.carYear : ''}`;
    }

}
