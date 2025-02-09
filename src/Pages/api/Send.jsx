// import { mailOptions, transporter } from '../../Config/nodemailer'


// const CONTACT_MESSAGE_FIELDS = {
//     name: 'Name',
//     email: 'Email ',
//     subject: 'Subject',
//     message: 'Message',

// };


// const generateEmailContent = (data) => {
//     const stringData = Object.entries(data).reduce((str, [key, val]) =>
//         (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`)
//         , " ");


//     const htmlData = Object.entries(data).reduce((str, [key, val]) =>
//         (str += `<h1>${CONTACT_MESSAGE_FIELDS[key]}</h1><p>${val}</p>`)
//         , " ");

//     return {
//         text: stringData,
//         htmlData
//     };
// };

// const handler = async (req, res) => {
//     if (req.method === 'POST') {
//         const data = req.body;
//         if (!data.name || !data.email || !data.number || !data.message) {
//             return res.status(400).json({ message: 'Bad Request' });
//         }

//         try {
//             await transporter.sendMail({
//                 ...mailOptions,
//                 ...generateEmailContent(data),
//                 subject: data.subject,
//             });
//             return res.status(200).json({ message: 'Success: true' })
//         } catch (error) {
//             console.log(error);
//             return res.status(400).json({ message: 'Bad Request' })
//         }
//     }
//     return res.status(400).json({ message: 'Bad Request' })
// }



// export default handler;