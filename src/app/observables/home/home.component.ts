import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-observables-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
 
  private firstSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    // this.firstSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete()
        }
        if (count > 3) {
          observer.error(new Error('error observer > 3'))
        }
        count++;
      }, 1000)
    });

    this.firstSubscription = customIntervalObservable.pipe(filter(data => {
      return data > 0;
    }), map((data: number) => {
      return 'Round: ' + (data + 1);
    })).subscribe(data => {
      console.log('Round: ' + (data + 1));
    }, error => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log('completed');
    })
  }
  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe();
  }

}
