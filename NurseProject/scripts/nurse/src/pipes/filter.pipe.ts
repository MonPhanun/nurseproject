import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchTerm: any): any[] {
        if (!items || !searchTerm) {
            return items;
        }

        searchTerm = searchTerm.toLowerCase();

        return items.filter(item => {
            // Modify this condition based on your filtering logic
            return JSON.stringify(item).toLowerCase().includes(searchTerm);
            //item.name.toLowerCase().includes(searchTerm);
        });
    }
}