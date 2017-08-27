import React, {Component} from 'react';

import Header from './components/header';

import Temperature from './main/components/temperature';
import Location from './main/components/location';
import Details from './main/components/details';
import Description from './main/components/description';

export class Main extends Component {
  render() {
    return (
      <div>
        <Header/>
        <main className="app-main today">
          <section className="weather-today">
            <div className="weather-today__flex--left">
              <Temperature/>
              <Location
                location="Minsk, BY"
                />
            </div>
            <div className="weather-today__flex--right">
              icon
              <span>and</span>
              icon
            </div>
          </section>
          <Details/>
          <Description/>
        </main>
      </div>
    );
  }
}
