import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {
  render() {
    return (
      <div>
        <p class="text">This is my Hello MyCard!</p>
      </div>
    );
  }
}
