let user_c = require("./../model/user");

const contents_object = new Array('audio','playlist','folder');

let user = new user_c("xendo", "devdetj94", false);

async function get_data() {

    return await user.login();

}
async function mount(){

    let user_data = await get_data();

    let content = await user.get_content_audio(user_data.contents.audios);

    console.log(await user_data);

}
mount();
