import { Component } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
  items = ['Espresso: A strong shot of espresso forms the base of the cappuccino.',
    'Steamed Milk: Fresh milk is heated and lightly aerated to create a creamy texture.',
    'Milk Foam: A thick layer of foamed milk sits on top, adding a frothy finish.',
    'Optional toppings: Cinnamon or cocoa powder can be sprinkled on top for extra flavor.'
    ];
    // steps = ['Espresso: A strong shot of espresso forms the base of the cappuccino.',
    //   'Steamed Milk: Fresh milk is heated and lightly aerated to create a creamy texture.',
    //   'Milk Foam: A thick layer of foamed milk sits on top, adding a frothy finish.',
    //   'Optional toppings: Cinnamon or cocoa powder can be sprinkled on top for extra flavor.'
    //   ];
}

