import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateRangeFilter'
})
export class DateRangeFilterPipe implements PipeTransform {
    transform(items: any[], startDate: Date, endDate: Date): any[] {
        if (!items || !startDate || !endDate) {
            return items;
        }

        return items.filter(item => {
            console.log(item.date)
            const itemDate = new Date(item.date); // Assuming date property exists in item object
            return itemDate >= startDate && itemDate <= endDate;
        });
    }
}