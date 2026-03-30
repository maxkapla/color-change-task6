/************************ 
 * Colorchangetask *
 ************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2025.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'ColorChangeTask';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color((-1.0000, -1.0000, -1.0000)),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);





flowScheduler.add(GoodbyeRoutineBegin());
flowScheduler.add(GoodbyeRoutineEachFrame());
flowScheduler.add(GoodbyeRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'shape_color_change_trials.csv', 'path': 'shape_color_change_trials.csv'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var InstructionsClock;
var Instruction_text;
var end_instructions;
var FixationClock;
var Fix;
var StudyClock;
var s1;
var s2;
var s3;
var s4;
var s5;
var s6;
var DelayClock;
var delaytext;
var testClock;
var t1;
var t2;
var t3;
var t4;
var t5;
var t6;
var key_resp;
var GoodbyeClock;
var goodbye_text;
var end_goodbye;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  Instruction_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instruction_text',
    text: 'In this task, you will see a set of 6 shapes.\n\nEach shape will be a different color.\n\nAfter a short pause, you will see the shapes again.\n\nYour job is to decide whether the second display is:\n\nS = SAME (no colors changed)\nD = DIFFERENT (one color changed)\n\nRespond as quickly and accurately as possible.\n\nPress any key to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_instructions = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Fixation"
  FixationClock = new util.Clock();
  Fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'Fix',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Study"
  StudyClock = new util.Clock();
  s1 = new visual.Polygon({
    win: psychoJS.window, name: 's1', 
    edges: 100, size:[0.08, 0.08],
    ori: 0.0, 
    pos: [(- 0.5), 0.0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  s2 = new visual.Polygon({
    win: psychoJS.window, name: 's2', 
    edges: 100, size:[0.08, 0.08],
    ori: 0.0, 
    pos: [(- 0.3), 0.0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  s3 = new visual.Polygon({
    win: psychoJS.window, name: 's3', 
    edges: 100, size:[0.08, 0.08],
    ori: 0.0, 
    pos: [(- 0.1), 0.0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  s4 = new visual.Polygon({
    win: psychoJS.window, name: 's4', 
    edges: 100, size:[0.08, 0.08],
    ori: 0.0, 
    pos: [0.1, 0.0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  s5 = new visual.Polygon({
    win: psychoJS.window, name: 's5', 
    edges: 100, size:[0.08, 0.08],
    ori: 0.0, 
    pos: [0.3, 0.0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  s6 = new visual.Polygon({
    win: psychoJS.window, name: 's6', 
    edges: 100, size:[0.08, 0.08],
    ori: 0.0, 
    pos: [0.5, 0.0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -5, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "Delay"
  DelayClock = new util.Clock();
  delaytext = new visual.TextStim({
    win: psychoJS.window,
    name: 'delaytext',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "test"
  testClock = new util.Clock();
  t1 = new visual.Polygon({
    win: psychoJS.window, name: 't1', 
    edges: 100, size:[0.08, 0.08],
    ori: 0.0, 
    pos: [(- 0.5), 0.0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  t2 = new visual.Polygon({
    win: psychoJS.window, name: 't2', 
    edges: 100, size:[0.08, 0.08],
    ori: 0.0, 
    pos: [(- 0.3), 0.0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  t3 = new visual.Polygon({
    win: psychoJS.window, name: 't3', 
    edges: 100, size:[0.08, 0.08],
    ori: 0.0, 
    pos: [(- 0.1), 0.0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  t4 = new visual.Polygon({
    win: psychoJS.window, name: 't4', 
    edges: 100, size:[0.08, 0.08],
    ori: 0.0, 
    pos: [0.1, 0.0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  t5 = new visual.Polygon({
    win: psychoJS.window, name: 't5', 
    edges: 100, size:[0.08, 0.08],
    ori: 0.0, 
    pos: [0.3, 0.0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  t6 = new visual.Polygon({
    win: psychoJS.window, name: 't6', 
    edges: 100, size:[0.08, 0.08],
    ori: 0.0, 
    pos: [0.5, 0.0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -5, 
    interpolate: true, 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Goodbye"
  GoodbyeClock = new util.Clock();
  goodbye_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'goodbye_text',
    text: 'You have completed the task.\n\nThank you for participating!\n\nPress any key to exit.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_goodbye = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var InstructionsMaxDurationReached;
var _end_instructions_allKeys;
var InstructionsMaxDuration;
var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    InstructionsClock.reset();
    routineTimer.reset();
    InstructionsMaxDurationReached = false;
    // update component parameters for each repeat
    end_instructions.keys = undefined;
    end_instructions.rt = undefined;
    _end_instructions_allKeys = [];
    psychoJS.experiment.addData('Instructions.started', globalClock.getTime());
    InstructionsMaxDuration = null
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(Instruction_text);
    InstructionsComponents.push(end_instructions);
    
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions' ---
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instruction_text* updates
    if (t >= 0.0 && Instruction_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruction_text.tStart = t;  // (not accounting for frame time here)
      Instruction_text.frameNStart = frameN;  // exact frame index
      
      Instruction_text.setAutoDraw(true);
    }
    
    
    // if Instruction_text is active this frame...
    if (Instruction_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *end_instructions* updates
    if (t >= 0.0 && end_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_instructions.tStart = t;  // (not accounting for frame time here)
      end_instructions.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_instructions.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_instructions.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_instructions.clearEvents(); });
    }
    
    // if end_instructions is active this frame...
    if (end_instructions.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_instructions.getKeys({
        keyList: typeof [] === 'string' ? [[]] : [], 
        waitRelease: false
      });
      _end_instructions_allKeys = _end_instructions_allKeys.concat(theseKeys);
      if (_end_instructions_allKeys.length > 0) {
        end_instructions.keys = _end_instructions_allKeys[_end_instructions_allKeys.length - 1].name;  // just the last key pressed
        end_instructions.rt = _end_instructions_allKeys[_end_instructions_allKeys.length - 1].rt;
        end_instructions.duration = _end_instructions_allKeys[_end_instructions_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions' ---
    for (const thisComponent of InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(end_instructions.corr, level);
    }
    psychoJS.experiment.addData('end_instructions.keys', end_instructions.keys);
    if (typeof end_instructions.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_instructions.rt', end_instructions.rt);
        psychoJS.experiment.addData('end_instructions.duration', end_instructions.duration);
        routineTimer.reset();
        }
    
    end_instructions.stop();
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'shape_color_change_trials.csv',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(FixationRoutineBegin(snapshot));
      trialsLoopScheduler.add(FixationRoutineEachFrame());
      trialsLoopScheduler.add(FixationRoutineEnd(snapshot));
      trialsLoopScheduler.add(StudyRoutineBegin(snapshot));
      trialsLoopScheduler.add(StudyRoutineEachFrame());
      trialsLoopScheduler.add(StudyRoutineEnd(snapshot));
      trialsLoopScheduler.add(DelayRoutineBegin(snapshot));
      trialsLoopScheduler.add(DelayRoutineEachFrame());
      trialsLoopScheduler.add(DelayRoutineEnd(snapshot));
      trialsLoopScheduler.add(testRoutineBegin(snapshot));
      trialsLoopScheduler.add(testRoutineEachFrame());
      trialsLoopScheduler.add(testRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var FixationMaxDurationReached;
var FixationMaxDuration;
var FixationComponents;
function FixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Fixation' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    FixationClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    FixationMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('Fixation.started', globalClock.getTime());
    FixationMaxDuration = null
    // keep track of which components have finished
    FixationComponents = [];
    FixationComponents.push(Fix);
    
    for (const thisComponent of FixationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function FixationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Fixation' ---
    // get current time
    t = FixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Fix* updates
    if (t >= 0.0 && Fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Fix.tStart = t;  // (not accounting for frame time here)
      Fix.frameNStart = frameN;  // exact frame index
      
      Fix.setAutoDraw(true);
    }
    
    
    // if Fix is active this frame...
    if (Fix.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      Fix.tStop = t;  // not accounting for scr refresh
      Fix.frameNStop = frameN;  // exact frame index
      // update status
      Fix.status = PsychoJS.Status.FINISHED;
      Fix.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of FixationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FixationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Fixation' ---
    for (const thisComponent of FixationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Fixation.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (FixationMaxDurationReached) {
        FixationClock.add(FixationMaxDuration);
    } else {
        FixationClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var StudyMaxDurationReached;
var StudyMaxDuration;
var StudyComponents;
function StudyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Study' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    StudyClock.reset(routineTimer.getTime());
    routineTimer.add(1.500000);
    StudyMaxDurationReached = false;
    // update component parameters for each repeat
    s1.setFillColor(new util.Color(col1));
    s1.setLineColor(new util.Color(col1));
    s2.setFillColor(new util.Color(col2));
    s2.setLineColor(new util.Color(col2));
    s3.setFillColor(new util.Color(col3));
    s3.setLineColor(new util.Color(col3));
    s4.setFillColor(new util.Color(col4));
    s4.setLineColor(new util.Color(col4));
    s5.setFillColor(new util.Color(col5));
    s5.setLineColor(new util.Color(col5));
    s6.setFillColor(new util.Color(col6));
    s6.setLineColor(new util.Color(col6));
    psychoJS.experiment.addData('Study.started', globalClock.getTime());
    StudyMaxDuration = null
    // keep track of which components have finished
    StudyComponents = [];
    StudyComponents.push(s1);
    StudyComponents.push(s2);
    StudyComponents.push(s3);
    StudyComponents.push(s4);
    StudyComponents.push(s5);
    StudyComponents.push(s6);
    
    for (const thisComponent of StudyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function StudyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Study' ---
    // get current time
    t = StudyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *s1* updates
    if (t >= 0.0 && s1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      s1.tStart = t;  // (not accounting for frame time here)
      s1.frameNStart = frameN;  // exact frame index
      
      s1.setAutoDraw(true);
    }
    
    
    // if s1 is active this frame...
    if (s1.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (s1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      s1.tStop = t;  // not accounting for scr refresh
      s1.frameNStop = frameN;  // exact frame index
      // update status
      s1.status = PsychoJS.Status.FINISHED;
      s1.setAutoDraw(false);
    }
    
    
    // *s2* updates
    if (t >= 0.0 && s2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      s2.tStart = t;  // (not accounting for frame time here)
      s2.frameNStart = frameN;  // exact frame index
      
      s2.setAutoDraw(true);
    }
    
    
    // if s2 is active this frame...
    if (s2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (s2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      s2.tStop = t;  // not accounting for scr refresh
      s2.frameNStop = frameN;  // exact frame index
      // update status
      s2.status = PsychoJS.Status.FINISHED;
      s2.setAutoDraw(false);
    }
    
    
    // *s3* updates
    if (t >= 0.0 && s3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      s3.tStart = t;  // (not accounting for frame time here)
      s3.frameNStart = frameN;  // exact frame index
      
      s3.setAutoDraw(true);
    }
    
    
    // if s3 is active this frame...
    if (s3.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (s3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      s3.tStop = t;  // not accounting for scr refresh
      s3.frameNStop = frameN;  // exact frame index
      // update status
      s3.status = PsychoJS.Status.FINISHED;
      s3.setAutoDraw(false);
    }
    
    
    // *s4* updates
    if (t >= 0.0 && s4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      s4.tStart = t;  // (not accounting for frame time here)
      s4.frameNStart = frameN;  // exact frame index
      
      s4.setAutoDraw(true);
    }
    
    
    // if s4 is active this frame...
    if (s4.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (s4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      s4.tStop = t;  // not accounting for scr refresh
      s4.frameNStop = frameN;  // exact frame index
      // update status
      s4.status = PsychoJS.Status.FINISHED;
      s4.setAutoDraw(false);
    }
    
    
    // *s5* updates
    if (t >= 0.0 && s5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      s5.tStart = t;  // (not accounting for frame time here)
      s5.frameNStart = frameN;  // exact frame index
      
      s5.setAutoDraw(true);
    }
    
    
    // if s5 is active this frame...
    if (s5.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (s5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      s5.tStop = t;  // not accounting for scr refresh
      s5.frameNStop = frameN;  // exact frame index
      // update status
      s5.status = PsychoJS.Status.FINISHED;
      s5.setAutoDraw(false);
    }
    
    
    // *s6* updates
    if (t >= 0.0 && s6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      s6.tStart = t;  // (not accounting for frame time here)
      s6.frameNStart = frameN;  // exact frame index
      
      s6.setAutoDraw(true);
    }
    
    
    // if s6 is active this frame...
    if (s6.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (s6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      s6.tStop = t;  // not accounting for scr refresh
      s6.frameNStop = frameN;  // exact frame index
      // update status
      s6.status = PsychoJS.Status.FINISHED;
      s6.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of StudyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function StudyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Study' ---
    for (const thisComponent of StudyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Study.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (StudyMaxDurationReached) {
        StudyClock.add(StudyMaxDuration);
    } else {
        StudyClock.add(1.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var DelayMaxDurationReached;
var DelayMaxDuration;
var DelayComponents;
function DelayRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Delay' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    DelayClock.reset(routineTimer.getTime());
    routineTimer.add(0.900000);
    DelayMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('Delay.started', globalClock.getTime());
    DelayMaxDuration = null
    // keep track of which components have finished
    DelayComponents = [];
    DelayComponents.push(delaytext);
    
    for (const thisComponent of DelayComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function DelayRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Delay' ---
    // get current time
    t = DelayClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *delaytext* updates
    if (t >= 0.0 && delaytext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      delaytext.tStart = t;  // (not accounting for frame time here)
      delaytext.frameNStart = frameN;  // exact frame index
      
      delaytext.setAutoDraw(true);
    }
    
    
    // if delaytext is active this frame...
    if (delaytext.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.9 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (delaytext.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      delaytext.tStop = t;  // not accounting for scr refresh
      delaytext.frameNStop = frameN;  // exact frame index
      // update status
      delaytext.status = PsychoJS.Status.FINISHED;
      delaytext.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of DelayComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function DelayRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Delay' ---
    for (const thisComponent of DelayComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Delay.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (DelayMaxDurationReached) {
        DelayClock.add(DelayMaxDuration);
    } else {
        DelayClock.add(0.900000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var testMaxDurationReached;
var _key_resp_allKeys;
var testMaxDuration;
var testComponents;
function testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'test' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    testClock.reset();
    routineTimer.reset();
    testMaxDurationReached = false;
    // update component parameters for each repeat
    t1.setFillColor(new util.Color(tcol1));
    t1.setLineColor(new util.Color(tcol1));
    t2.setFillColor(new util.Color(tcol2));
    t2.setLineColor(new util.Color(tcol2));
    t3.setFillColor(new util.Color(tcol3));
    t3.setLineColor(new util.Color(tcol3));
    t4.setFillColor(new util.Color(tcol4));
    t4.setLineColor(new util.Color(tcol4));
    t5.setFillColor(new util.Color(tcol5));
    t5.setLineColor(new util.Color(tcol5));
    t6.setFillColor(new util.Color(tcol6));
    t6.setLineColor(new util.Color(tcol6));
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('test.started', globalClock.getTime());
    testMaxDuration = null
    // keep track of which components have finished
    testComponents = [];
    testComponents.push(t1);
    testComponents.push(t2);
    testComponents.push(t3);
    testComponents.push(t4);
    testComponents.push(t5);
    testComponents.push(t6);
    testComponents.push(key_resp);
    
    for (const thisComponent of testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'test' ---
    // get current time
    t = testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *t1* updates
    if (t >= 0.0 && t1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t1.tStart = t;  // (not accounting for frame time here)
      t1.frameNStart = frameN;  // exact frame index
      
      t1.setAutoDraw(true);
    }
    
    
    // if t1 is active this frame...
    if (t1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *t2* updates
    if (t >= 0.0 && t2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t2.tStart = t;  // (not accounting for frame time here)
      t2.frameNStart = frameN;  // exact frame index
      
      t2.setAutoDraw(true);
    }
    
    
    // if t2 is active this frame...
    if (t2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *t3* updates
    if (t >= 0.0 && t3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t3.tStart = t;  // (not accounting for frame time here)
      t3.frameNStart = frameN;  // exact frame index
      
      t3.setAutoDraw(true);
    }
    
    
    // if t3 is active this frame...
    if (t3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *t4* updates
    if (t >= 0.0 && t4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t4.tStart = t;  // (not accounting for frame time here)
      t4.frameNStart = frameN;  // exact frame index
      
      t4.setAutoDraw(true);
    }
    
    
    // if t4 is active this frame...
    if (t4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *t5* updates
    if (t >= 0.0 && t5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t5.tStart = t;  // (not accounting for frame time here)
      t5.frameNStart = frameN;  // exact frame index
      
      t5.setAutoDraw(true);
    }
    
    
    // if t5 is active this frame...
    if (t5.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *t6* updates
    if (t >= 0.0 && t6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t6.tStart = t;  // (not accounting for frame time here)
      t6.frameNStart = frameN;  // exact frame index
      
      t6.setAutoDraw(true);
    }
    
    
    // if t6 is active this frame...
    if (t6.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({
        keyList: typeof ['s','d'] === 'string' ? [['s','d']] : ['s','d'], 
        waitRelease: false
      });
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp.keys == correct) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'test' ---
    for (const thisComponent of testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('test.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(correct)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var GoodbyeMaxDurationReached;
var _end_goodbye_allKeys;
var GoodbyeMaxDuration;
var GoodbyeComponents;
function GoodbyeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Goodbye' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    GoodbyeClock.reset();
    routineTimer.reset();
    GoodbyeMaxDurationReached = false;
    // update component parameters for each repeat
    end_goodbye.keys = undefined;
    end_goodbye.rt = undefined;
    _end_goodbye_allKeys = [];
    psychoJS.experiment.addData('Goodbye.started', globalClock.getTime());
    GoodbyeMaxDuration = null
    // keep track of which components have finished
    GoodbyeComponents = [];
    GoodbyeComponents.push(goodbye_text);
    GoodbyeComponents.push(end_goodbye);
    
    for (const thisComponent of GoodbyeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function GoodbyeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Goodbye' ---
    // get current time
    t = GoodbyeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *goodbye_text* updates
    if (t >= 0.0 && goodbye_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      goodbye_text.tStart = t;  // (not accounting for frame time here)
      goodbye_text.frameNStart = frameN;  // exact frame index
      
      goodbye_text.setAutoDraw(true);
    }
    
    
    // if goodbye_text is active this frame...
    if (goodbye_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *end_goodbye* updates
    if (t >= 0.0 && end_goodbye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_goodbye.tStart = t;  // (not accounting for frame time here)
      end_goodbye.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_goodbye.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_goodbye.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_goodbye.clearEvents(); });
    }
    
    // if end_goodbye is active this frame...
    if (end_goodbye.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_goodbye.getKeys({
        keyList: typeof [] === 'string' ? [[]] : [], 
        waitRelease: false
      });
      _end_goodbye_allKeys = _end_goodbye_allKeys.concat(theseKeys);
      if (_end_goodbye_allKeys.length > 0) {
        end_goodbye.keys = _end_goodbye_allKeys[_end_goodbye_allKeys.length - 1].name;  // just the last key pressed
        end_goodbye.rt = _end_goodbye_allKeys[_end_goodbye_allKeys.length - 1].rt;
        end_goodbye.duration = _end_goodbye_allKeys[_end_goodbye_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of GoodbyeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GoodbyeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Goodbye' ---
    for (const thisComponent of GoodbyeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Goodbye.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(end_goodbye.corr, level);
    }
    psychoJS.experiment.addData('end_goodbye.keys', end_goodbye.keys);
    if (typeof end_goodbye.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_goodbye.rt', end_goodbye.rt);
        psychoJS.experiment.addData('end_goodbye.duration', end_goodbye.duration);
        routineTimer.reset();
        }
    
    end_goodbye.stop();
    // the Routine "Goodbye" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
