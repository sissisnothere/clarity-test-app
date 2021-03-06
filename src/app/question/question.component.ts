/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input, OnInit } from "@angular/core";
//if the file is in current folder/same level: need to have ./in front of the folder name
import {FormGroup, FormControl, Validators} from "@angular/forms";

import { Question } from "./question";
import { QuestionService } from '../question.service';


@Component({
    selector: 'question',
    styleUrls: ['./question.component.scss'],
    templateUrl: './question.component.html',
    providers: [QuestionService]
})



//1. this is the new class of job Position, has property id and name
// because we have a new class here /new component, need to add to app.module, otherwise error
export class QuestionComponent implements OnInit {

	//declare that hero is an input property, so data can do two way binding
	@Input() question : Question; 

	questions : Question[];	//array
	selectedQuestion: Question;	//single
	selections : any[];  //passing answer to the array here, and display in the modal window
    numofQuestions : any;
    questionCount = 0;

    employeeAddressForm = new FormGroup({
 
        answer: new FormGroup({
            key: new FormControl('', Validators.required),
            value: new FormControl('', Validators.required)
        })
    });


	/*
	Mostly we use ngOnInit for all the initialization/declaration and avoid stuff to work in the constructor. The constructor should only be used to initialize class members but shouldn't do actual "work".
	So you should use constructor() to setup Dependency Injection and not much else. ngOnInit() is better place to "start" - it's where/when components' bindings are resolved.
	*/
	constructor(private questionService : QuestionService) {

	}

	getQuestions(): void {
      //this should return an array of positions, but if it complains: " Two different types with this name exist, but they are unrelated." 
      //maybe bcause we import the position in two files, or missing import files from other location

      // this.questionService.getQuestions().then(questions => this.questions=questions);

      /*** this is the first question: id is 12 ***/
       this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 11);
       this.numofQuestions = this.questionService.getNumberQuestions();
       this.selections = this.selectedQuestion.answer;
       console.log(this.selectedQuestion);  
    } 


    //if implements OnInit, must have the following ngOnInit function
    //must need it otherwise the data does not show in modal window!
    //TODO: when close the modal window, need to restart the questions!
    //    need to use a form group.... and this.modalForm.reset()

	ngOnInit(): void { 
		this.getQuestions();
	}


    onSubmit(id: any, answer : string): void {
        console.log("in question submit id is " + id + " answer is " + answer); 
        if(id == 18 && answer === "A") {
            //display the recommand position 

        }
        else if(id == 11 && answer === "A") {
            //display the recommand position 
        }

        //this.open = false;
         this.questionCount += 1;

    }

    reset() : void { this.selectedQuestion.answer = null;    }

	onOpen(open: Boolean): void {
		this.open = open;
	}

    open: Boolean = false;

    onNext(id: any, answer : string): void {

    	//write logics here:
        //TODO: need to clear selection after close the modal window
    	if(id == 11 && answer === "A") {
    		this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 12);
    		//this.selections = this.selectedQuestion.answer;
           // answer = null;
    	}
    	else if(id == 11 && answer === "B") {
    		this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 12);
    		//this.selections = this.selectedQuestion.answer;
    	}
    	else if(id == 12 && answer === "A") {
    		this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 13);
    		//this.selections = this.selectedQuestion.answer;
    	}
    	else if(id == 12 && answer === "B") {
    		this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 13);
    		//this.selections = this.selectedQuestion.answer;
    	}
    	else if(id == 13 && answer === "A") {
    		this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 14);
    		//this.selections = this.selectedQuestion.answer;
    	}
    	else if(id == 13 && answer === "B") {
    		this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 14); 
    		//this.selections = this.selectedQuestion.answer;
    	}
    	else if(id == 14 && answer === "A") {
    		this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 15);  
    		//this.selections = this.selectedQuestion.answer;
    	}
    	else if(id == 14 && answer === "B") {
    		this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 15);
    		//this.selections = this.selectedQuestion.answer;
    	}
        else if(id == 14 && answer === "C") {
            this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 15);
            //this.selections = this.selectedQuestion.answer;
        }
    	else if(id == 15 && answer === "A") {
    		this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 16);
    		//this.selections = this.selectedQuestion.answer;
    	}
    	else if(id == 15 && answer === "B") {
    		this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 16);  
    		
    	}
    	else if(id == 16 && answer === "A") {
            this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 17);
            //this.selections = this.selectedQuestion.answer;
        }
        else if(id == 16 && answer === "B") {
            this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 17);  
            
        }
        else if(id == 16 && answer === "C") {
            this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 17);  
            
        }
        else if(id == 17 && answer === "A") {
            this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 18);
            //this.selections = this.selectedQuestion.answer;
        }
        else if(id == 17 && answer === "B") {
            this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 18);  
            
        }
        else if(id == 18 ) {
           //do nothing. this will submit the answer
        }

    	this.selections = this.selectedQuestion.answer;
        this.questionCount += 1;

        console.log(this.selectedQuestion);  
        //answer = null;
    }
}


