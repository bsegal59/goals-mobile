import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { basicHabits } from '../../app/data/habits';
import { TabsPage } from '../tabs/tabs';
import { AddPresetHabitPage } from '../add-preset-habit/add-preset-habit';
import { HabitPostService } from '../../services/habitpost.service';
/**
 * Generated class for the BasicHabitsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-basic-habits',
  templateUrl: 'basic-habits.html',
  providers: [HabitPostService],
})
export class BasicHabitsPage {

  basicHabits: Array<any> = basicHabits;

  constructor(private habitPostService: HabitPostService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasicHabitsPage');
  }

  goToDiscover(){
    this.navCtrl.pop();
  }

  goToCreateHabit(basicHabit){
    this.navCtrl.push(AddPresetHabitPage, {
      'habit': basicHabit.habit,
      'reminder': basicHabit.reminder,
      'currentColor': basicHabit.currentColor
    });
    
  }

}
