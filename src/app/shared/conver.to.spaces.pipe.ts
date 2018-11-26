import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Pipe({
    name: 'converToSpacesPipe'
})

export class ConverToSpacesPioe   implements PipeTransform {

    

    transform(value: string, character: string) : string {
        if (isNullOrUndefined(value))
            return value;
        else 
            return value.replace(character, ' ');
        }
    }

