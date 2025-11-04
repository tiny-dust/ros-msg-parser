# Robot state with header, name, enum mode and pose

std_msgs/Header header # Standard header
string name             # Robot name

# enum MODE_IDLE=0 Idle
# enum MODE_ACTIVE=1 Active
# enum MODE_ERROR=2 Error
int32 mode              # Current mode

geometry_msgs/Pose pose # Current pose in map frame
