require("dotenv").config();
const mongoose = require('mongoose');
const Exercise = require('../model/exercise');

//Mongoose configuration
mongoose.connect("mongodb://localhost:27017/FullBody");
mongoose.connect(process.env.MONGODB_URI);


const Exercises = [{
  name: "Bike indoor",
  description: "Indoor cycling, as an organized activity, is a form of exercise with classes focusing on endurance, strength, intervals, high intensity (race days) and recovery, and involves using a special stationary exercise bicycle with a weighted flywheel in a classroom setting. It is commonly called spinning.",
  video_link: "https://www.youtube.com/watch?v=Wd9VxqWxPuw",
  muscles:'CARDIO'

},{
 name: "Run",
 description: "Running on a treadmill does have its disadvantages, and for some runners, a mile on the “hamster wheel” feels like ten miles outdoors.",
 video_link: "https://www.youtube.com/watch?v=dq5XWcIcGNE",
  muscles:'CARDIO'
},{
  name: "Rope",
  description: "Jump with both feet slightly apart over the rope. Beginners usually master this technique first before moving onto more advanced techniques",
  video_link: "https://www.youtube.com/watch?v=rSYkJIOnT78",
  muscles:'CARDIO'
},{
  name:         "Elliptical trainer",
  description:  "An elliptical trainer or cross-trainer (also called an X-trainer) is a stationary exercise machine used to simulate stair climbing, walking, or running without causing excessive pressure to the joints, hence decreasing the risk of impact injuries. For this reason, people with some injuries can use an elliptical to stay fit, as the low impact affects them little. Elliptical trainers offer a non-impact cardiovascular workout that can vary from light to high intensity based on the speed of the exercise and the resistance preference set by the user",
  video_link:   "https://www.youtube.com/watch?v=EXMcwt2USCA",
  muscles:"CARDIO"

},{
  name:       "Wood Chop",
  description:  "<ul><li>Connect a standard handle to a tower, and move the cable to the highest pulley position.</li><li>With your side to the cable, grab the handle with one hand and step away from the tower. You should be approximately arms length away from the pulley, with the tension of the weight on the cable. Your outstretched arm should be aligned with the cable.</li><li>With your feet positioned shoulder width apart, reach upward with your other hand and grab the handle with both hands. Your arms should still be fully extended.</li><li>In one motion, pull the handle down and across your body to your front knee while rotating your torso.</li><li>Keep your back and arms straight and core tight while you pivot your back foot and bend your knees to get a full range of motion.</li><li>Maintain your stance and straight arms. Return to the neutral position in a slow and controlled manner.</li><li>Repeat to failure.</li><li>Then, reposition and repeat the same series of movements on the opposite side.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=UYQgPDM9sMg",
  muscles:"ABS",
},{
  name:         "Weighted Side Touches",
  description:  "<ul><li>Set up for the weighted side touches by placing a mat on the floor and placing a bench (or something else to rest your feet under) at one end.</li><li>Lay down on the mat and put your feet under the support.</li><li>Grip your weight plate and hold it out in front of your body with your arms slightly bent.</li><li>Pull your upper body up, with your back straight, so that it's at about a 30 degree angle to the floor.</li><li>Keeping your back straight, twist at the torso moving the weight plates slowly from side to side.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=H30f6oeHGzw",
  muscles: "ABS" ,
},{
  name:         "Lying Heel Touches",
  description:  "<ul><li>Place a mat on the floor and lay down on your back.</li><li>Bring your knees up so your thighs are at a right angle to your calves.</li><li>Put your hands down by your side, with you palms facing the floor.</li><li>Get into the starting position by slightly raising your shoulder blades off the floor.</li><li>Reach down with your right hand as far as possible.</li><li>Now repeat the reach with your left hand. That's 1 rep. </li><li>Repeat for desired reps.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=RD2MHcp2io8",
  muscles:"ABS",
},{
  name:         "Twisting Floor Crunch",
  description:  "<ul><li>The twisting floor crunch works the abs and obliques. Position a mat on the floor and lie down on the mat flat on your back.</li><li>Pull your left leg up until your knee joint is at around 90 degrees.</li><li>Now take your right leg and rest your ankle on your left knee.</li><li>Start the exercise by touching the side of your head with your fingertips and raising your shoulder blades slightly off the mat.</li><li>Crunch up, bringing your left elbow up to your right knee.</li><li>Slowly lower back to starting position without letting your shoulder blades touch the floor.</li><li>Repeat set for the opposite side of the body.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=XJ_WjHHpcI4",
  muscles:"ABS",
},{
  name:         "Seated Leg Tucks",
  description:  "<ul><li>Seated leg tucks are a great all round exercise that hits both the lower and upper abs. Grab a flat bench and position yourself at one end with your buttocks around 1 foot from the end of the bench.</li><li>Grasp the bench beside your hips.</li><li>Keeping your knees and feet together and using your hands for balance, lay back until you are almost straight out.</li><li>Your knees should be slightly bent and your shoulder blades not touching the bench. In one motion, bring your knees in and torso up towards your knees.</li><li>Your knees should almost touch your chest at the top of the exercise.</li><li>Extend your body back out to the starting position.</li><li>Repeat for desired reps.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=3bQjaXBGdDA",
  muscles:"ABS",
},{
  name:         "Roman Chair Knee Raise",
  description:  "<ul><li>The Roman chair knee raise hits your lower abdominal muscles. Get into the chair so that your forearms are resting on the pads, back on the back pad, and hands grasping the handles.</li><li>Take your feet off the rests so they are hanging straight down.</li><li>Slowly raise your knees up as high as possible.</li><li>Pause, then lower back to the starting position.</li><li>Repeat for desired reps.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=wAb-dtLGO9Q",
  muscles:"ABS",
},{
  name:         "Cable Crunch",
  description:  "<ul><li>Attach the rope attachment to a high pulley cable and set the appropriate weight on the stack</li><li>Stand directly in front of the cable machine, facing away from it.</li><li>Grasp the rope from behind your head with your palms facing inward and drop to your knees.</li><li>Your buttocks should be resting on top of your feet. Keeping your elbows bent and hands at either head height or shoulder height, crunch down as far as possible.</li><li>Pause, then slowly lower yourself back to the starting position.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=6U0TZSKasr8",
  muscles:"ABS",
},{
  name:         "Side Crunch With Leg Lift",
  description:  "<ul><li>The side crunch with leg lift is a great exercise for hitting the abs and obliques. Grab a mat and lay down on your left side.</li><li>Your legs should be straight and together. Your left arm should go across your stomach and your hand touching the area you're going to work.</li><li>Your right arm should be touching the right side of your head (not holding your head, only touch with your finger tips).</li><li>In one motion, lift your right leg up and crunch into your right side.</li><li>Pause, then lower back to the starting position.</li><li>Repeat for desired reps and them do the same for your other side.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=5QU5Vt8u_XU",
  muscles:"ABS",
},{
  name:         "Plank",
  description:  "<ul><li>The Plank is a stationary exercise that helps strengthen the entire core of the body. Set up for the plank by getting a mat and laying down on your stomach.</li><li>To start the exercise prop your torso up on your elbows and your feet up on your toes.</li><li>Keeping yourself completely straight, hold this position for as long as possible.</li><li>Typically, the plank is done for 3 x 1 minute sets. However, as you get stronger your should be able to do 1 - 3 minutes.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=pSHjTRCQxIw",
  muscles:"ABS",
},{
  name:         "Lying Leg Raise With Hip Thrust",
  description:  "<ul><li>The lying bench leg raise with hip thrust is a great exercise for hitting your abdominal muscles. Set up for the exercise by getting a flat bench and positioning it to give enough room for your legs to extend out one end.</li><li>Sit on the bench with your buttocks close to one end, then lay back.</li><li>Grasp the bench at head height for stability.</li><li>Extend your legs straight out level with your body, keeping your knees and feet together. This is the starting position for the movement.</li><li>Bending at the hips only, slowly raise your legs up until they are pointing straight up.</li><li>At this point lift your pelvis off the bench as high as possible.</li><li>Lower your pelvis back down, and slowly lower your feet back to the starting position.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=kGriZT61vlc",
  muscles:"ABS",
},{
  name:         "Floor Toe Reach",
  description:  "<ul><li>All you need for the floor toe reach is a mat to lay on. Lay on the mat on your back with your arms by your side and legs straight out in front of you.</li><li>Put one hand over the top of the other and point your hands straight up towards the ceiling.</li><li>Now, keeping your legs straight and feet together, bring your legs up so they are also pointing to the ceiling. This is the start of the exercise.</li><li>Now reach up as far as you can with your hands towards your toes. Use your abs to elevate your shoulders off the floor.</li><li>Pause, and slowly lower back to starting position.</li><li>Repeat for desired reps.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=FCmMnS6b158",
  muscles:"ABS",
},{
  name:         "Leg Extension",
  description:  "<ul><li>The leg extension is a great exercise for isolating the quads. Sit on the leg extension machine and adjust it so that the leg pad sits on your ankles.</li><li>Then adjust the back rest so that your knees are just off the end of the seat.</li><li>Select the weight you want to use on the stack.</li><li>Take the weight off the stack by extending your legs slightly. This is the starting position for the exercise.</li><li>Holding onto the handles for stability, and bending at the knees only, extend your legs out as far as possible.</li><li>Hold for a count of 1 while squeezing your quads, and then slowly lower back to the starting position. The weight should not touch the stack.</li><li>Repeat for desired reps.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=YyvSfVjQeL0",
  muscles:"LEG",
},{
  name:         "Deep Squat",
  description:  "<ul><li>The deep squat is a variation of the regular squat. The difference is that instead of lowering your body until your thighs are parallel to the floor, you squat down as far as possible. This brings the glutes and hamstrings into the exercise more. Deep squats are more challenging that regular squats! Set up for the exercise by setting the barbell to just below shoulder height and loading the weight you want to use.</li><li>Stand under the bar with your feet at about shoulder width apart. Position the bar so that it is resting on the muscles on the top of your back, not on the back of your neck. The bar should feel comfortable. If it doesn't, try adding some padding to the bar.</li><li>Now take your hands over the back and grip the bar with a wide grip for stability.</li><li>You should now bend at the knees and straighten your back in preparation to take the weight off the rack.</li><li>Keeping your back straight and eyes up, push up through the legs and take the weight off the rack.</li><li>Take a small step back and stabilize yourself.</li><li>Keeping your eyes facing forwards, slowly lower your body down. Don't lean forward as you come down. Your buttocks should come out and drop straight down.</li><li>Squat down as far as possible, pushing your knees slightly outwards creating a 'hole' for you to lower into. Do not let your knees track over your toes.</li><li>Then slowly raise your body back up by pushing through your heels.</li><li>Do not lock the knees out when you stand up, and then repeat the movement.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=AYQWVdPgQl0",
  muscles:"LEG",
},
{
  name:         "Bodyweight Walking Lunge",
  description:  "<ul><li>Stand up straight with a slight bend in your knees and look forward. This is the starting position.</li><li>Step forward with your left leg while maintaining your balance and squat down through your hips.</li><li>Keep your torso straight and head up. Don't allow your knee to track out over your toes.</li><li>Continue the movement by driving your left heal into the floor and standing straight up - bringing your right foot forward to meet your left foot.</li><li>Continue moving forward in this fashion by alternating which leg you lead with.</li><li>Repeat for desired reps.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=vfqHZpKaXXM",
  muscles:"LEG",
},
{
  name:         "Narrow Stance 45 Degree Leg Press ",
  description:  "<ul><li>Set up for the narrow stance 45 degree leg press by loading the weight plates you want to use on the leg press machine.</li><li>Sit down on the leg press machine and position your feet in a narrow stance, in the middle of the foot plate.</li><li>Extend your legs to take the weight off the racks, and release the safety.</li><li>Your knees should be slightly bent at the start of the movement, as this will ensure the weight is on your quads.</li><li>Slowly lower the weight down until your legs are just past a 45 degree angle.</li><li>Push through your heels and extend your legs to move the weight back up to the starting position.</li><li>Repeat movement for desired reps.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=3GgyVa7vCls",
  muscles:"LEG",
},
{
  name:         "Leg Curl",
  description:  "<ul><li>The lying leg curl is a great exercise to isolate the hamstrings. Set up for the leg curl by selecting the weight you want to use on the stack and adjusting the padding to suit your leg length.</li><li>Lay face down on the machine. The padding should be positioned just above the back of your ankles. If it's higher than that, adjust the length.</li><li>Tense up the hamstrings by taking the weight slightly off the stack. This is the starting position for the exercise.</li><li>Squeeze the hamstrings and curl the weight up as far as possible.</li><li>Squeeze the hamstring hard, and then slowly lower the weight back to the starting position.</li><li>Repeat for desired reps.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=MxJ0Tq6ldkU",
  muscles:"LEG",
},
{
  name:         "Good Mornings",
  description:  "<ul><li>Good mornings are a compound exercise that hit the lower back and hamstrings and uses the glutes as secondary muscles. Set up for the exercise by placing a barbell across the back of your shoulders. The bar shoulder rest on the trap muscles, not the back of the neck.</li><li>Stand up straight, with a straight back, and with your eyes facing forward.</li><li>Execute the exercise by slowly bending forward at the hips while keeping your back straight, head up, and eyes looking straight out in front of you.</li><li>Lower yourself down until your back is about parallel with the floor.</li><li>Do not pause at the bottom of the exercise, and immediately start raising your upper body back to the starting position.</li><li>Repeat for desired reps.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=VkNcc0BQrpA",
  muscles:"LEG",
},
{
  name:         "Smith Machine Stiff Leg Deadlift ",
  description:  "<ul><li>Set up for the exercise by loading a smith machine with the weight you want to use. Set the bar to the lowest setting.</li><li>Stand facing the barbell with your feet around shoulder width apart.</li><li>Bend down with your knees and grasp the barbell using an overhand grip (palms facing down) with your hands around shoulder width apart or wider.</li><li>Keeping your back straight stand straight up resting the bar on your thighs.</li><li>Get set up for the movement by pulling your shoulders back, sticking your chest out, and arching your back slightly.</li><li>Keeping your eyes facing forwards, slowly bend at the hips lowering the barbell straight down close to your body. You should feel the stretch in your hamstrings!</li><li>Lower the bar down as far as your hamstrings will let you comfortably. Now engage the hamstrings and begin to raise the bar straight back up.</li><li>Your eyes should be facing up and your shoulders back. This will prevent your lower back from rounding.</li><li>Squeeze up through the glutes and hamstrings until you're standing straight up.</li><li>Repeat for desired reps.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=m-IiIB2_WHQ",
  muscles:"LEG",
},
{
  name:         "45 Degree Calf Raise",
  description:  "<ul><li>Load the desired weight on a 45 degree leg press and sit down on the seat.</li><li>Place the balls of your feet on the bottom edge of the foot plate at around shoulder width apart.</li><li>Push the weight up and disengage the weight platform from the safety using the handles by your sides.</li><li>Slowly allow your toes to come back as far as possible. This is the starting position for the exercise.</li><li>Keeping your legs straight, slowly push your toes up as far as possible.</li><li>Squeeze the calf muscles, and then slowly lower the weight back to the starting position.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=SxptVsqNHk0",
  muscles:"LEG",
},
{
  name:         "Seated Dumbbell Calf Raise",
  description:  "<ul><li>The seated dumbbell calf raise is another good exercise for those who don't have access to a seated calf raise machine. Set up by placing a step or block at the end of a flat bench.</li><li>Next, grasp a pair of dumbbells and sit on the end of the bench.</li><li>Put the balls of your feet on the edge of the step/block and rest the ends of the dumbbells on your thighs close to your knees.</li><li>Put the balls of your feet on the edge of the step/block and rest the ends of the dumbbells on your thighs close to your knees.</li><li></li><li></li><li></li></ul>",
  video_link:   "https://www.youtube.com/watch?v=k4w4vcFS1_o",
  muscles:"LEG",
},
{
  name:         "Smith Machine Calf Raise",
  description:  "<ul><li>The smith machine is a good alternative if your gym does not have a standing calf raise machine. Set the bar on the smith machine to around shoulder height and rack up the weight you want to use.</li><li>Grab a step or calf block and put it below the bar.</li><li>Step up on the block and position the balls of your feet on the edge.</li><li>Grasp the smith bar with a wide grip and position it across the top of your back muscles (not across the back of your neck!).</li><li>Push up to take the weight off the rack and slowly let your heels drop down as far as possible. This is the starting position.</li><li>Slowly raise your heels as far as you can off the floor.</li><li>Squeeze the calf muscles, and then slowly lower your heels back to the starting position.</li><li>Repeat for desired reps.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=AW6us_9YNXo",
  muscles:"LEG",
},{
  name:         "Deadlift",
  description:  "<ul><li>The deadlift is one of the most potent muscle and strength building exercises one can perform. Just take a look at all the parts of your body that get worked! Set up for the deadlift by loading the appropriate amount of weight onto an olympic bar.</li><li>Stand in front of the bar with your feet around shoulder width apart and half way under the loaded bar. Your toes should be pointed straight ahead or slightly outward. Do what is comfortable for you.</li><li>Reach down and grab the bar with both hands using an overhand grip just outside of shoulder width. You can use an alternating grip (one over/one under) to help you lift more weight. Lifting straps can also be used to help lift more weight.</li><li>Drop your hips until your shins are touching the barbell. Your hips should be in the best, most natural position for leverage so you may need to raise or lower them slightly.</li><li>Make sure your eyes are looking ahead. Your body will follow your head so keep your head up and eyes forward!</li><li>Be sure to keep a straight back and never allow it to round. You are now in the starting position.</li><li>Focus on standing up with the bar - not pulling the bar from the floor, and lead with your head as you rise. Drive with your heals and explode upward (leading with your head) as you rise.</li><li>As the bar rises above your knees, thrust your hips forward and contract your back by bringing your shoulder blades back.</li><li>Pause here for a moment and then reverse the movement by bending at the knees while slowly lowering the weight - keeping it under strict control on the descent.</li><li>Reset your stance if necessary and repeat for desired reps.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=op9kVnSso6Q",
  muscles:"BACK"
},{
  name:         "Seated Cable Row",
  description:  "<ul><li>Set the appropriate weight on the weight stack and attach a close grip bar or V-bar to the seated row machine.</li><li>Grasp the bar with a neutral grip (palms facing in).</li><li>Keeping your legs slightly bent and your back straight, pull the weight up slightly off the stack. You should be sitting straight upright with your shoulders back. This is the starting position.</li><li>Keeping your body in position, pull the handle into your stomach.</li><li>Pull your shoulder blades back, squeeze, pause, and then slowly lower the weight back to the starting position.</li><li>Repeat for desired reps.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=xQNrFHEMhI4",
  muscles: "BACK"
},{
  name:         "Standing Arnold Press",
  description:  "<ul><li>Set up for the exercise by grabbing a pair of dumbbells and standing straight up with your feet around shoulder width apart.</li><li>Raise the dumbbells to shoulder height on each side, and twist so that your palms are facing your body.</li><li>The dumbbells should now be positioned in front of your shoulders. Your back should be straight and there should be a slight bend in your knees. This is the starting position for the exercise.</li><li>Keeping your eyes facing forwards, slowly raise the dumbbells above your head while turning your wrists so that your palms are now facing forward (away from your body).  </li><li>Keep raising the weight until your arms are almost fully extended.</li><li>Do not pause at the top of the movement, and begin lowering the dumbbells back down to the starting position - twisting at the wrist until your palms are facing your body once again.</li><li>Repeat this movement for the desired amount of reps.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=6gJt8EmtByc",
  muscles:"SHOULDER",
},{
  name:         "Cable Lateral Raise",
  description:  "<ul><li>Set the pulleys of a dual cable machine to the low setting and select the weight you wish to use.</li><li>Stand facing away from the machine and grasp the left handle with your right hand, and right handle with your left hand.</li><li>Stand straight up with your arms in front of you (crossed over). The weight should be slightly off the stack. This is the starting position for the movement.</li><li>Keeping your elbows high, extend your arms out in a semi-circle motion.</li><li>Once your hands get to around shoulder height, pause and slowly lower the weight back to the starting position.</li><li>Repeat for desired reps.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=vZhMIixK5ks",
  muscles:"SHOULDER",
},{
  name:         "Barbell Bench Press",
  description:  "<ul><li>Setup for the bench barbell bench press by setting the height of the rack (if it's adjustable) and adding the weight you're going to use.</li><li>Lie back on a the flat bench. Using a medium width grip and palms facing forward (a grip that creates a 90-degree angle in the middle of the movement between the forearms and the upper arms), lift the bar from the rack and hold it straight over you with your arms locked. This will be your starting position.</li><li>Slowly lower the bar straight down to the middle of your chest. Don't let the bar touch your chest! Pause, then slowly raise the bar back up. Do not lock your elbows out or rest at the top, go straight back into your next rep.</li><li>Repeat for desired reps.</li><li>Place the bar back on the rack.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=gRVjAtPip0Y",
  muscles:"CHEST",
},{
  name:         "Cable Crossovers (upper chest)",
  description:  "<ul><li>Set up the cable machine for crossovers by adjusting the pulleys to the highest point possible on both sides and attaching single grip handles.</li><li>Set your desired weight on the weight stacks and grasp each handle with your palms facing down.</li><li>Take a step forward.</li><li>With your arms slightly bent at the elbows, keep your chest up and eyes facing forwards. This is the starting position for the exercise.</li><li>Rotating at the shoulders only and moving your arms in a circular motion, slowly bring the handles together out in front of your body around head height.</li><li>Squeeze your chest as you bring the handles together.</li><li>Slowly lower the weight back to the starting position and then repeat for desired reps.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=wKmM-Kapl1U",
  muscles:"CHEST",
},{
  name:         "EZ Bar Preacher Curl",
  description:  "<ul><li>The EZ bar preacher curl is a great exercise to isolate the biceps, while minimizing the strain on your wrists. Adjust the seat on the preacher bench so that your upper arms sit comfortably on the padding when seated.</li><li>Load the desired weight on the barbell.</li><li>Sit on the preacher bench and grip the EZ bar with your hands shoulder width apart using an underhand (palms facing up) grip. (note: You can use a wide or narrow grip on this exercise)</li><li>Keeping your back straight and eyes facing forward, take the weight off the rack so that you're supporting it with your arms slightly bent. This is the starting position.</li><li>Slowly bring the weight up until your forearms are at a right angle to the floor.</li><li>Squeeze the bicep at the top of the movement, and then slowly lower it back to the starting position.</li><li>Repeat for desired reps.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=GTFRJcTcoJY",
  muscles:"BICEPS",
},{
  name:         "Wide Grip Cable Curl ",
  description:  "<ul><li>Set up for the wide grip cable curl by attaching a straight bar to the low pulley cable and selecting the weight you want to use on the stack.</li><li>Stand facing the cable machine with your legs shoulder width apart.</li><li>Grasp the bar with an underhand grip (palms facing up), and hands wider than shoulder width apart.</li><li>Keeping your elbows tucked in by your sides, slowly curl the bar up as far as possible.</li><li>Squeeze the biceps at the top of the movement, and then slowly lower the weight back to starting position.</li><li>Do not pause, and go straight into the next rep!</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=8Izzlm61kBc",
  muscles:"BICEPS",
},{
  name:         "High Pulley Overhead Tricep Extension (rope extension)",
  description:  "<ul><li>Set up for the high overhead tricep extension by attaching a rope to a high pulley and selecting the weight you want to use on the stack.</li><li>Facing away from the pulley, grab the rope behind your neck with a neutral grip (palms facing in) keeping your hands close together.</li><li>Bend over at the waist until your torso is almost parallel to the floor. This will lift the weight slightly from the stack.</li><li>You can stagger your feet and bend slightly at the knees to help with balance.</li><li>Your upper arms should be parallel to the floor at this point and you should be grasping the rope behind your head. You are now in the starting position.</li><li>Moving only at your elbow joints slowly push the rope out in from of your body until your arms are fully extended. As you push, spread the rope until your hands are around shoulder width apart at the peak of the movement.</li><li>Pause, and then slowly bring the rope back to the starting position allowing your hands to reunite.</li><li>Repeat this movement for desired reps.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=sV77jlMMVN4",
  muscles:"TRICEPS",
},{
  name:         "EZ Bar Skullcrusher",
  description:  "<ul><li>The EZ bar lying tricep extension (AKA skullcrusher) is one of the best tricep building exercises there is. If you get wrist pain doing a regular skullcrusher, you should use the EZ bar. Sit on the end of a flat bench with a barbell on your thighs.</li><li>Grip the EZ bar on the inner grips using an overhand grip.</li><li>Bring the bar up to your chest and lay down on your back.</li><li>Extend your arms straight up above your chest.</li><li>Keeping your elbows fixed in place and not pointing out, slowly lower the bar until it is about an inch from your forehead (hence the name skullcrusher!).</li><li>Pause, and then slowly extend your arms back to the starting position.</li><li>Do not lock your elbows out, and then repeat for desired reps.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=CWC1hg_aoj8",
  muscles:"TRICEPS",
},{
  name:         "Wide Smith Machine Squat",
  description:  "<ul><li>Set up for the wide smith machine squat by setting the bar to around shoulder height and loading the weight you want to use on the smith machine.</li><li>Stand under the bar with your legs in a wide stance and your toes pointed slightly outward.</li><li>Grasp the bar with a wide grip and position the center of the bar on top of the muscles on your back. The bar should not sit on your neck!</li><li>Keeping your back straight and eyes facing forwards and take the weight off the rack. Take a slight step forward.</li><li>Keeping your eyes facing forwards with a straight back, slowly squat down until your thighs are parallel to the floor.</li><li>Pushing up through the heels, raise the the bar back to the starting position.</li><li>Repeat for desired reps.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=sulYP-CvaGw",
  muscles:"GLUTES",
},{
  name:         "Glute Kick Back",
  description:  "<ul><li>Position yourself on your hands and knees on top of a flat bench.</li><li>Keep your back straight, mid section tight and eyes facing forward.</li><li>Take the weight off your left knee by leaning to your right slightly.</li><li>Keeping your body fixed and rotating at the hip only, extend your knee back as high was possible while keeping your leg bent.</li><li>Pause and squeeze the glute muscle at the top of the movement, and then slowly lower your leg back to the starting position.</li><li>Repeat for desired reps, and then repeat for the right leg.</li></ul>",
  video_link:   "https://www.youtube.com/watch?v=LUMwbA5-GRc",
  muscles:"GLUTES",
},
];

Exercise.create(Exercises,(err, exercise)=>{
  if(err){
    throw err;
  }
  console.log(exercise);
});
