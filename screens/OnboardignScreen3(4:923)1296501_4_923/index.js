import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_4_924}>
        <View source={{ uri: "null" }} style={styles.View_I4_924_122_38} />
        <View style={styles.View_I4_924_122_43}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5336a36b-7a48-496a-aa8d-8a2c95275df1"
            }}
            style={styles.ImageBackground_I4_924_122_44}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5bec77d9-5858-41d7-8773-43ca6601670c"
            }}
            style={styles.ImageBackground_I4_924_122_48}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13da72fc-e9b9-4e08-910f-67cc67682955"
            }}
            style={styles.ImageBackground_I4_924_122_52}
          />
        </View>
        <View style={styles.View_I4_924_122_59}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e0f214a-5dbc-4594-b42b-0462cceed086"
            }}
            style={styles.ImageBackground_I4_924_122_944}
          />
        </View>
      </View>
      <View style={styles.View_4_925}>
        <View style={styles.View_I4_925_122_128} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ca13b97-aaa6-4e21-993e-a6e29ffdad3e"
        }}
        style={styles.ImageBackground_4_926}
      />
      <View style={styles.View_4_927}>
        <View style={styles.View_4_928} />
        <View style={styles.View_4_929}>
          <Text style={styles.Text_4_929}>Get Started!</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8dafcfe-2272-4162-95f2-7750c7087132"
        }}
        style={styles.ImageBackground_4_930}
      />
      <View style={styles.View_4_1104}>
        <Text style={styles.Text_4_1104}>
          Get ready to elevate your content game and boost your earnings with
          the Onit Marketing app - the ultimate marketing solution for college
          athletes.
        </Text>
      </View>
      <View style={styles.View_4_1189}>
        <View style={styles.View_4_1190}>
          <View style={styles.View_4_1191}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/193b9c96-623d-4dab-b4d6-363893109209"
              }}
              style={styles.ImageBackground_4_1192}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9028f4af-a97f-490a-a792-dfbf091603b5"
              }}
              style={styles.ImageBackground_4_1193}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf5ff2b1-6d72-4789-9214-ec3ccec69f04"
              }}
              style={styles.ImageBackground_4_1194}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27bcc9eb-5e82-452d-834e-f2bab53214c1"
              }}
              style={styles.ImageBackground_4_1195}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ca640e4-0b47-4c81-aa38-90ac72eba51d"
              }}
              style={styles.ImageBackground_4_1196}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b72e92c-6dcf-4f33-aeda-8e4e49f377ed"
              }}
              style={styles.ImageBackground_4_1197}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9509ece-4ee0-4ba1-9aa3-5d2e6ad88ccd"
              }}
              style={styles.ImageBackground_4_1198}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dfb1fcd9-85aa-4f7f-b1ea-6f9eed5b963a"
              }}
              style={styles.ImageBackground_4_1199}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c888c43-615a-44c9-898e-a22adbc3edde"
              }}
              style={styles.ImageBackground_4_1200}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6bec6638-b24b-4abf-8a98-12119778d25d"
              }}
              style={styles.ImageBackground_4_1201}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65cf9d1c-825e-48ca-a4a3-f424f488b711"
              }}
              style={styles.ImageBackground_4_1202}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/589f35e4-a9a8-47ef-aa5d-d9a709f3fc4f"
              }}
              style={styles.ImageBackground_4_1203}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b2051b5-9dd2-41bc-90f5-ec5870d3fd07"
              }}
              style={styles.ImageBackground_4_1204}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0eb046f0-bd7d-48a1-af2c-9131a17830ac"
              }}
              style={styles.ImageBackground_4_1205}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a54c7df-586c-4fbc-a4e7-7c75ed566586"
              }}
              style={styles.ImageBackground_4_1206}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71c4a919-9769-411c-9939-cc37e08d7635"
              }}
              style={styles.ImageBackground_4_1207}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a24ba75-32ca-4563-b0cb-c5cf4d83f101"
              }}
              style={styles.ImageBackground_4_1208}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9776173-ad29-48fa-a16f-e89d329a48fb"
              }}
              style={styles.ImageBackground_4_1209}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01007550-820f-45f6-99e8-97a6b35fe9b0"
              }}
              style={styles.ImageBackground_4_1210}
            />
            <View style={styles.View_4_1211}>
              <View style={styles.View_4_1212}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b4516643-9d82-40e5-883c-e5ffc97d32af"
                  }}
                  style={styles.ImageBackground_4_1213}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44d0956c-5b44-422e-a892-5aaf08b434c9"
                  }}
                  style={styles.ImageBackground_4_1215}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e28c6fcc-98a6-45ab-93e0-01d91ba04687"
              }}
              style={styles.ImageBackground_4_1217}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c4f51ae-6f17-469d-9ff2-acd3fb0007c9"
              }}
              style={styles.ImageBackground_4_1218}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6467762-d4b6-4186-b0d2-c2f39c801572"
              }}
              style={styles.ImageBackground_4_1219}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd12f649-1d4e-487f-bbef-4714e0562d18"
              }}
              style={styles.ImageBackground_4_1220}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f84c8e4-03a4-4f56-986d-042206398254"
              }}
              style={styles.ImageBackground_4_1221}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7569b627-2b27-4def-b6b2-320485561267"
              }}
              style={styles.ImageBackground_4_1222}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c86b7fe6-3ec1-4a8e-a70d-cdde0034cbfb"
              }}
              style={styles.ImageBackground_4_1223}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f722cd2-9031-4a4f-a41a-19b50e9b8e90"
              }}
              style={styles.ImageBackground_4_1224}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/005a3781-8bb2-4ee8-9fd4-29077bbf871e"
              }}
              style={styles.ImageBackground_4_1225}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f37915fa-fec4-4855-ac32-cf874f31ed53"
              }}
              style={styles.ImageBackground_4_1226}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39991859-347e-46c8-b0eb-9b613f76a625"
              }}
              style={styles.ImageBackground_4_1227}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/52992e58-9783-4a19-a578-040f14303e7c"
              }}
              style={styles.ImageBackground_4_1228}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bcc57122-77fd-40d1-a777-0cf12710d63a"
              }}
              style={styles.ImageBackground_4_1229}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62033d14-8455-4c25-9000-7094919e163e"
              }}
              style={styles.ImageBackground_4_1230}
            />
            <View style={styles.View_4_1231}>
              <View style={styles.View_4_1232}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12502f73-173c-4edd-93cf-555463d28bcb"
                  }}
                  style={styles.ImageBackground_4_1233}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c24eab0f-b811-491f-9d26-1896ec6dba2f"
                  }}
                  style={styles.ImageBackground_4_1235}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05f9c144-d4a2-4b76-848f-f4788efb8ff7"
              }}
              style={styles.ImageBackground_4_1240}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c13ce0e-2419-4626-9932-df02e4020563"
              }}
              style={styles.ImageBackground_4_1241}
            />
            <View style={styles.View_4_1242}>
              <View style={styles.View_4_1243}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4cd88ef6-bab4-4965-bc16-6b87486ec16a"
                  }}
                  style={styles.ImageBackground_4_1244}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6a7a66e-b4e4-4eff-bf36-0cb2a2f15c8d"
                  }}
                  style={styles.ImageBackground_4_1246}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/162e5407-adc5-4eec-bb91-d8e29fcbfc92"
              }}
              style={styles.ImageBackground_4_1249}
            />
            <View style={styles.View_4_1250}>
              <View style={styles.View_4_1251}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e4552279-864f-4a43-b7a9-f8603be7c844"
                  }}
                  style={styles.ImageBackground_4_1252}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80d103d5-2465-4f19-9faf-a58115c26180"
                  }}
                  style={styles.ImageBackground_4_1254}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd8ec1d6-48d8-4832-a871-f08fc4171cda"
              }}
              style={styles.ImageBackground_4_1256}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9fdc0a14-2452-456d-910a-efdf86e6c6c9"
              }}
              style={styles.ImageBackground_4_1257}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f93caf51-7843-4a4c-9069-2f71c71721d9"
              }}
              style={styles.ImageBackground_4_1258}
            />
            <View style={styles.View_4_1259}>
              <View style={styles.View_4_1260}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f4561a2-21b2-4eaf-80fb-656b2ec38f49"
                  }}
                  style={styles.ImageBackground_4_1261}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41fb8431-51c0-46f5-93b8-d8b25dc3415a"
                  }}
                  style={styles.ImageBackground_4_1263}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4031582d-0913-4f5c-a1d6-6e2c5184dce7"
              }}
              style={styles.ImageBackground_4_1265}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/717c6352-b004-48c1-8c1d-618721d8f15b"
              }}
              style={styles.ImageBackground_4_1266}
            />
            <View style={styles.View_4_1267}>
              <View style={styles.View_4_1268}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/abe95630-7c47-418e-b605-9e4879fbfc18"
                  }}
                  style={styles.ImageBackground_4_1269}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14507a0c-90d4-4685-8292-e91f2a7d3aec"
                  }}
                  style={styles.ImageBackground_4_1271}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c7102a7-b76b-442d-977a-62615e3bf82c"
              }}
              style={styles.ImageBackground_4_1274}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/186a9dfc-4d8c-4b11-bf0e-d46dcc14d2ff"
              }}
              style={styles.ImageBackground_4_1275}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/10aa6898-9aca-4627-8acc-237193bdd2a5"
              }}
              style={styles.ImageBackground_4_1276}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/227ec8b3-339b-4be7-b46d-c4d2c72efd34"
              }}
              style={styles.ImageBackground_4_1277}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6c487df-cbf4-4925-8b73-d97bc3df565d"
              }}
              style={styles.ImageBackground_4_1278}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0368136-fffd-4062-8bac-c1ba1b1c484a"
              }}
              style={styles.ImageBackground_4_1279}
            />
            <View style={styles.View_4_1280}>
              <View style={styles.View_4_1281}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98364abd-b6e2-4dbd-b8c2-7a7dfa898a07"
                  }}
                  style={styles.ImageBackground_4_1282}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd5e69b5-61f4-4147-965a-96dc1d18d70a"
                  }}
                  style={styles.ImageBackground_4_1284}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c100d47d-5343-4bf3-9543-519fb9e94746"
              }}
              style={styles.ImageBackground_4_1289}
            />
            <View style={styles.View_4_1290}>
              <View style={styles.View_4_1291}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7234e010-78df-4d96-b53a-0a9dce0d604d"
                  }}
                  style={styles.ImageBackground_4_1292}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df237dce-fe18-47f5-acf6-d91bbb949873"
                  }}
                  style={styles.ImageBackground_4_1294}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8b966b4-30fc-4701-95de-83638ff3af57"
              }}
              style={styles.ImageBackground_4_1298}
            />
            <View style={styles.View_4_1299}>
              <View style={styles.View_4_1300}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/523f5a71-9e3f-4777-a0e6-119bdc7f80ad"
                  }}
                  style={styles.ImageBackground_4_1301}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f83f9a41-ec52-4d14-a7af-afe73641aa8e"
                  }}
                  style={styles.ImageBackground_4_1303}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/753124d7-a495-474d-8ad0-000d93e57cf9"
              }}
              style={styles.ImageBackground_4_1305}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b03dde68-82a8-4807-b421-da4ce543044d"
              }}
              style={styles.ImageBackground_4_1306}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a16e3399-b012-428b-9d74-45dc9d053778"
              }}
              style={styles.ImageBackground_4_1307}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca752565-240f-43ae-b835-2bd9b27f9a40"
              }}
              style={styles.ImageBackground_4_1308}
            />
            <View style={styles.View_4_1309}>
              <View style={styles.View_4_1310}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e889f4fa-2658-4991-b2fe-ee0f8acb3d2a"
                  }}
                  style={styles.ImageBackground_4_1311}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69e30ed9-01ab-4a18-a763-e28bf4851cf4"
                  }}
                  style={styles.ImageBackground_4_1313}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9b7f258-baac-47b0-b670-c0a89929ac43"
              }}
              style={styles.ImageBackground_4_1315}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51e90788-8f43-4187-9a14-6b966b255aa6"
              }}
              style={styles.ImageBackground_4_1316}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b14914c0-1709-4ab3-a0a3-af5f63382328"
              }}
              style={styles.ImageBackground_4_1317}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47c7547e-da4f-4c02-adc9-75f618112b39"
              }}
              style={styles.ImageBackground_4_1318}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/88061efa-dfe2-464a-9542-8c1e611e80e5"
              }}
              style={styles.ImageBackground_4_1319}
            />
            <View style={styles.View_4_1320}>
              <View style={styles.View_4_1321}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/820b6c46-803c-4409-b65c-92b8b365b304"
                  }}
                  style={styles.ImageBackground_4_1322}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6d758c9-647c-4532-8656-68530af78f6c"
                  }}
                  style={styles.ImageBackground_4_1324}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d7cb77e-8932-43c1-b598-ff5becd52ddd"
              }}
              style={styles.ImageBackground_4_1335}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3330319d-0b3c-4ae6-b52c-0d56711a225e"
              }}
              style={styles.ImageBackground_4_1336}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/985b53a6-0080-4c51-9f95-a3aa85c2406d"
              }}
              style={styles.ImageBackground_4_1337}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75f90eaa-54cd-4d3a-90e1-3d2d8060bbb0"
              }}
              style={styles.ImageBackground_4_1338}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/299a2019-3d3b-40a9-8fca-717fc11d07ee"
              }}
              style={styles.ImageBackground_4_1339}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b342f23-3c40-4ff7-86c2-79fdf8a05aea"
              }}
              style={styles.ImageBackground_4_1340}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e17d9542-a6ef-4209-86c3-5f11a8855e08"
              }}
              style={styles.ImageBackground_4_1341}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/548bc3ed-a7d6-4410-b8b6-3d5492c53ed4"
              }}
              style={styles.ImageBackground_4_1342}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_4_1351}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b14936cf-bfb3-4e79-ba62-c00df2d571a0"
          }}
          style={styles.ImageBackground_I4_1351_1_886}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(18, 22, 23, 1)" },
  View_2: { height: hp("111%") },
  View_4_924: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I4_924_122_38: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("0%")
  },
  View_I4_924_122_43: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  ImageBackground_I4_924_122_44: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  ImageBackground_I4_924_122_48: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_I4_924_122_52: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I4_924_122_59: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%")
  },
  ImageBackground_I4_924_122_944: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_925: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4_925_122_128: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_4_926: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("9%"),
    resizeMode: "cover"
  },
  View_4_927: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("97%")
  },
  View_4_928: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(101, 197, 194, 1)"
  },
  View_4_929: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4_929: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_930: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("94%")
  },
  View_4_1104: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("75%"),
    justifyContent: "flex-start"
  },
  Text_4_1104: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_1189: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_4_1190: {
    width: wp("95%"),
    height: hp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_1191: {
    width: wp("95%"),
    height: hp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1192: {
    width: wp("95%"),
    height: hp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1193: {
    width: wp("18%"),
    height: hp("7%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_4_1194: {
    width: wp("16%"),
    height: hp("6%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_4_1195: {
    width: wp("17%"),
    height: hp("7%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_4_1196: {
    width: wp("14%"),
    height: hp("6%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_4_1197: {
    width: wp("28%"),
    height: hp("17%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_4_1198: {
    width: wp("30%"),
    height: hp("17%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_4_1199: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_4_1200: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_4_1201: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_4_1202: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%")
  },
  ImageBackground_4_1203: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_4_1204: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_4_1205: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_4_1206: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  ImageBackground_4_1207: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  ImageBackground_4_1208: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  ImageBackground_4_1209: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_4_1210: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  View_4_1211: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  View_4_1212: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1213: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1215: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1217: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_4_1218: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_4_1219: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_4_1220: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_4_1221: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_4_1222: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_4_1223: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_4_1224: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_4_1225: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_4_1226: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_4_1227: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_4_1228: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_4_1229: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_4_1230: {
    width: wp("18%"),
    height: hp("8%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  View_4_1231: {
    width: wp("18%"),
    height: hp("8%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  View_4_1232: {
    width: wp("18%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1233: {
    width: wp("18%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1235: {
    width: wp("18%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1240: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_4_1241: {
    width: wp("10%"),
    height: hp("8%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  View_4_1242: {
    width: wp("10%"),
    height: hp("8%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  View_4_1243: {
    width: wp("10%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1244: {
    width: wp("10%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1246: {
    width: wp("10%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1249: {
    width: wp("18%"),
    height: hp("4%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  View_4_1250: {
    width: wp("18%"),
    height: hp("4%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  View_4_1251: {
    width: wp("18%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1252: {
    width: wp("18%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1254: {
    width: wp("18%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1256: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_4_1257: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_4_1258: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_4_1259: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_4_1260: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1261: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1263: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1265: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_4_1266: {
    width: wp("8%"),
    height: hp("11%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  View_4_1267: {
    width: wp("8%"),
    height: hp("11%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  View_4_1268: {
    width: wp("8%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1269: {
    width: wp("8%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1271: {
    width: wp("8%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1274: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_4_1275: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_4_1276: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_4_1277: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_4_1278: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_4_1279: {
    width: wp("14%"),
    height: hp("3%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  View_4_1280: {
    width: wp("14%"),
    height: hp("3%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  View_4_1281: {
    width: wp("14%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1282: {
    width: wp("14%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1284: {
    width: wp("14%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1289: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  View_4_1290: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  View_4_1291: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1292: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1294: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1298: {
    width: wp("11%"),
    height: hp("4%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_4_1299: {
    width: wp("11%"),
    height: hp("4%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_4_1300: {
    width: wp("11%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1301: {
    width: wp("11%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1303: {
    width: wp("11%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1305: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_4_1306: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_4_1307: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_4_1308: {
    width: wp("10%"),
    height: hp("7%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_4_1309: {
    width: wp("10%"),
    height: hp("7%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_4_1310: {
    width: wp("10%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1311: {
    width: wp("10%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1313: {
    width: wp("10%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1315: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_4_1316: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_4_1317: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_4_1318: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_4_1319: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  View_4_1320: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  View_4_1321: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1322: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1324: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_1335: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_4_1336: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_4_1337: {
    width: wp("9%"),
    height: hp("0%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_4_1338: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_4_1339: {
    width: wp("9%"),
    height: hp("0%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_4_1340: {
    width: wp("8%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_4_1341: {
    width: wp("67%"),
    height: hp("6%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_4_1342: {
    width: wp("37%"),
    height: hp("26%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  View_4_1351: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I4_1351_1_886: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
