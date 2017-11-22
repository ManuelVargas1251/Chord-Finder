/*
║Manuel Vargas'        ║
║Universal Chord Finder║
║Written in C++        ║

This program should be able to display the chord name of the user inputted chord.

This could help any musicians more quickly understand what chords they are playing. Maybe if they are having trouble with inversions or also just need to write down on a chord chart what should be played.
*/

#include<iostream>
#include<string>
#include<stdlib.h>
#include <stdio.h>
#include <string.h>

using namespace std;


void prompt(){

	system("clear");	//Clears terminal
	cout<<endl;
	cout<<"\t** Universal Chord Finder v.8 **"<<endl<<endl;	//Program Prompt
}

void chord(string* uchord, int numofNotes){
	
	int i=0, j=0, k=0, l=0;
	
	string uarray[12];
	int location[12];
	int skip_loop;
	int interval[12], intrun=0;
	
	//Defines chromatic musical alphabet
	//in order to store both sharps and flats we need 2 array with different names but same locations
	string sharpDict [12+1]= {"A","A#","B","C","C#","D","D#","E","F","F#","G","G#"};
	string flatDict [12+1]= {"A", "Bb","B", "C", "Db","D","Eb","E", "F", "Gb","G","Ab"};

	k=numofNotes;
	l=numofNotes;
	
	//initializing location
	while(i<12){
		location[i]=3333;
		i++;
	}
	i=0;

	
	//stores user input in order (according to music dictionary) in a new array, uarray
	while(l>0){
		
		for(i=0;i<12;i++){	//Running note through entire music dictionary
			
			//tests both sharps and flats
			if(uchord[j]==sharpDict[i] || uchord[j]==flatDict[i]){
				
				if(uarray[i]==uchord[j]){
					break;
				}
				
				uarray[i]=uchord[j];
				
				if(k>0){
					location[j]=i;
					k--;
				}
				goto skip_loop;	
			}
		}
		skip_loop:
		//cout<<"Inside test new"<<endl;
		
		l--;
		j++;
	}
	
	i=0;
	
	//PRINT USER ARRAY DEFINED BY MY DICTIONARY
	/*
	cout<<"User Array In Order:"<<endl;
	while(i<12){
		cout<<i<<": \""<<uarray[i]<<"\""<<endl;
		i++;
	}
	cout<<endl;
	*/
	
	//PRINT LOCATION ARRAY
	/*
	i=0;
	cout<<"Location:"<<endl;
	while(i<12){
		cout<<i<<": \""<<location[i]<<"\""<<endl;
		
		i++;
	}
	cout<<endl<<endl;	
	*/
	
	i=0;

	//Creates an int of how many tests of the intervals will be run
	while(location[i]!=3333){
		intrun++;
		i++;
	}
	
	//if 3, then number of tests are 2; test 1:(1 and 2), test 2 (2 and 3)
	intrun=intrun-1;
	cout<<"intrun: "<<intrun<<endl<<endl;
	


	i=0;	
	cout<<"Intervals:"<<endl;
	//Now a loop to test the distance between notes in uarray
	while(intrun!=0){
		//if(abs(location[i]-location[i+1])<9){
			interval[i]=abs(location[i]-location[i+1]);
		//}
		cout<<interval[i]<<endl;
		i++;
		intrun--;
	}
	
	cout<<endl;

	cout<<"Interval Array:"<<endl;
	for(i=0;i<4;i++)
		cout<<interval[i]<<endl;
	cout<<endl;
	
	//if the interval is greater than 5 (Major 5th), the interval is most likely an inversion or the chord is not fitting into the array nicely (like D chords). To fix this, subtract twelve from it and it should give the correct interval but probably won't work for inversions yet because those intervals need to be flipped.
	for(i=0;i<3;i++){
		if(interval[i]>5){
			interval[i]=12-interval[i];
		}
	}

	i=0;	//checks the intervals from the beginning
	
	//Testing the interval array
	
	//Only for true Intervals; 2 notes
	//---------------------------------//
	if(numofNotes==2){
		
		if(interval[i]==2)
			cout<<"Minor Second"<<endl;
		if(interval[i]==3)
			cout<<"Minor Third"<<endl;
		if(interval[i]==4)
			cout<<"Major Third"<<endl;
		if(interval[i]==5)
			cout<<"Perfect Fourth"<<endl;
		if(interval[i]==6)
			cout<<"Tritone"<<endl;
		if(interval[i]==7)
			cout<<"Perfect Fifth"<<endl;
		if(interval[i]==8)
			cout<<"Perfect Fifth"<<endl;
	}
	//---------------------------------//
	
	
	//3 notes
	//---------------------------------//
	if(numofNotes==3){
		if(interval[i]==4){	//major 3rd
			if(interval[i+1]==3){	//minor 3rd 
				cout<<uarray[location[i]]<<" Major"<<endl;
			}
		}

		if(interval[i]==3){	//minor 3rd
			if(interval[i+1]==4){	//major 3rd 
				cout<<uarray[location[i]]<<" Minor"<<endl;
			}
		}
		
		if(interval[i]==3){	//minor 3rd
			if(interval[i+1]==3){	//minor 3rd 
				cout<<uarray[location[i]]<<" Diminished"<<endl;
			}
		}
		
		//location[i] should only be print inside augmented, others should go by root position
		if(interval[i]==4){	//major 3rd
			if(interval[i+1]==4){	//major 3rd 
				cout<<uarray[location[i]]<<" Augmented"<<endl;
			}
		}

		if(interval[i]==7 || interval[i+1]==7){	//Major 5th
			cout<<uarray[location[i]]<<"5"<<endl;
		}
	}
	//---------------------------------//
	
	//Inversions (for triads)
		//Major Triads
	if(interval[i]==3){
		if(interval[i+1]==5){	
			cout<<uarray[location[2]]<<" Major, 1st Inversion"<<endl;
		}
	}
	
	if(interval[i]==5){	
		if(interval[i+1]==4){	
			cout<<uarray[location[1]]<<" Major, 2nd Inversion"<<endl;
		}
	}
	
		//Minor Triads
	if(interval[i]==4){
		if(interval[i+1]==5){	
			cout<<uarray[location[2]]<<" Minor, 1st Inversion"<<endl;
		}
	}
	
	if(interval[i]==5){	
		if(interval[i+1]==3){	
			cout<<uarray[location[1]]<<" Minor, 2nd Inversion"<<endl;
		}
	}
	
	// 7th Chords
	//--Dominant 7
	//--Major 7
	//--Minor 7 (that's a minor chord plus the dom 7)
	//--7 (flat 5)
	if(interval[i]==4){	//major 3rd
		if(interval[i+1]==2){	//2nd 
			if(interval[i+2]==4){
				cout<<uarray[location[i]]<<" Dom 7 (flat 5)"<<endl;
				
			}
			else	
				cout<<uarray[location[i]]<<" Major 7 (flat 5)"<<endl;
		}
	}

	cout<<endl;
}

int main(){
	
	char temp[30]; //where the user input will be scanned to //max of 10 notes w/ accidentals
	string notes[10];	//where the users corrected input will be stored and sent

	int i=0, j=0;	//counters
	int numofNotes=0;

	//initialization of array where notes will be stored
	while(i!=10){
		notes[i]="Nothing Stored";
		//cout<<notes[i]<<i<<endl;
		i++;
		}
		
	i=0;	//reinitialization
	
	prompt();	//prompt
	
	//grabs entire line from user. Ex. "A C# E"
	gets(temp);
	
	
	
	//starts tokening
	char * pch;
	char c;
	//pch[1]=0;
	//cout<<"pch: \""<<pch[1]<<"\""<<endl;
	pch = strtok(temp," ");

	//cout<<"*****"<<endl;
	while(pch != NULL){

		//cout<<pch<<endl;
		
		//input note length cannot be greater than 2
		if(strlen(pch)>2){
			cout<<"This is invalid input: "<<pch<<endl;
			cout<<"Please leave spaces between notes"<<endl;
			return 0;
		}
		
		//change pch[0] to caps
		c=pch[0];
		pch[0]=toupper(c);
		
		//first character location can only be a letters between A and G
		if(pch[0] >= 'H'){
			cout<<pch[0]<<" is not in the musical alphabet."<<endl;
			return 0;
		}
		
		//if string has an accidental
		if(strlen(pch)==2){
			//if the character is 'sharp' or 'flat', do nothing
			if(pch[1]== '#'|| pch[1]=='b'){
			}
			else{
				cout<<pch[1]<<" is not a sharp or flat"<<endl;
				return 0;
			}
		}
		
		
		//string otherDict [12+1]= {"A","A#","Cb","B#","C#","D","D#","Fb","E#","F#","G","G#"};
		
		//for the stupid enharmonics like Cb and E#
		if(pch[1]=='b'){
			if(pch[0]=='C'){
				pch[0]='B';
				pch[1]=0;
			}
			else if(pch[0]=='F'){
				pch[0]='E';
				pch[1]=0;
			}
			
		}
		
		if(pch[1]=='#'){
			if(pch[0]=='B'){
				pch[0]='C';
				pch[1]=0;
			}
			else if(pch[0]=='E'){
				pch[0]='F';
				pch[1]=0;
			}

			
		}
		
		//storing string in array once it"s passed all tests
		notes[i]=pch;
		
		//makes the next token get tested
		pch=strtok(NULL, " ");
		numofNotes++;
		i++;
		
	}
	cout<<endl;
	//Prints what it has scanned in
	//cout<<temp<<endl;
	
	//prints notes array
	///*
	while(j < numofNotes){
		cout<<"Note "<<j<<": \""<<notes[j]<<"\""<<endl;
		j++;
	}
	cout<<endl;
	
	cout<<"Number of Notes: "<<numofNotes<<endl;
	
	cout<<endl;
	//*/
	chord(notes,numofNotes);



	return 0;
}
