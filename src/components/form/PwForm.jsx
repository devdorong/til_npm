// import styled from "@emotion/styled";
// import { Button, Form, Input } from "antd";
// import { useState } from "react";

// const PwFormH2 = styled.h2`
//   display: flex;
//   margin: 20px 0;
// `;

// function PwForm() {
//   // js

//   // 1. 비밀번호 같은지 다른지 상태 저장
//   const [match, setMatch] = useState(true);
//   // 2. Ant Design 에서 Form 요소를 저장해 두고 참조하기
//   const [form] = Form.useForm();
//   // 3. 비밀번호가 바뀔 때 마다 체크함.
//   const handleChangePassword = () => {
//     // name 이 password 인 필드의 값, 즉 value 읽기
//     const pw = form.getFieldsValue("password");
//     // name 이 passwordConfirm 인 필드의 값, 즉 value 읽기
//     const pwConfirm = form.getFieldsValue("passwordConfirm");
//     if (pwConfirm) {
//       setMatch(pw === pwConfirm);
//     }
//   };
//   const onFinish = values => {
//     console.log(values);
//   };

//   // jsx
//   return (
//     <div>
//       <PwFormH2>비밀번호 변경</PwFormH2>
//       <div>
//         <Form
//           form={form}
//           name={"password-form"}
//           style={{ width: "600px", margin: "0 auto" }}
//           onFinish={values => onFinish(values)}
//         >
//           {/* <Form.Item>
//             <Input.Password placeholder="현재 비밀번호" />
//           </Form.Item> */}
//           <Form.Item
//             name={"password"}
//             required={true}
//             rules={[
//               { required: true, message: "비밀번호는 필수항목 입니다." },
//               {
//                 pattern:
//                   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[{\]};:'",<.>/?\\|`~])[a-zA-Z\d!@#$%^&*()_\-+=\[{\]};:'",<.>/?\\|`~]{8,}$/,
//                 message: "비밀번호 형식에 맞지 않습니다.",
//               },
//             ]}
//             style={{ marginBottom: 2 }}
//           >
//             <Input.Password
//               placeholder="새 비밀번호"
//               onChange={handleChangePassword}
//             />
//           </Form.Item>
//           <Form.Item name={"passwordConfirm"}>
//             <Input.Password
//               placeholder="새 비밀번호 확인"
//               onChange={handleChangePassword}
//             />
//           </Form.Item>
//           {/* 비밀번호 비교한 결과 출력 */}
//           {!match && <div style={{ color: "red" }}>비밀번호가 다릅니다.</div>}
//           <Form.Item>
//             <Button htmlType="submit" disabled={!match}>
//               확인
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>
//     </div>
//   );
// }

// export default PwForm;

// //   <Form.Item
// //     name={"passwordConfirm"}
// //     label="비밀번호 확인"
// //     required={true}
// //   >
// //     <Input.Password placeholder="비밀번호를 한번더 입력해주세요." />
// //   </Form.Item>
import { Button, Form, Input } from "antd";
import { useState } from "react";
function PwForm() {
  // js 자리
  // 1. 비밀번호 같은지 다른지 상태저장
  const [match, setMetch] = useState(true);
  // 2. Ant Design 에서 Form 요소를 저장해 두고 참조하기
  const [form] = Form.useForm();
  // 3. 비밀번호가 바뀔 때 마다 체크함.
  const handleChangePassword = () => {
    // name 이 password 인 필드의 값, 즉 value 읽기
    const pw = form.getFieldValue("password");
    // name 이 passwordConfirm 인 필드의 값, 즉 value 읽기
    const pwConfirm = form.getFieldValue("passwordConfirm");
    if (pwConfirm) {
      setMetch(pw === pwConfirm);
    }
  };
  const onFinish = values => {
    console.log(values);
  };
  // jsx 자리
  return (
    <div>
      <h2>비밀번호 검증 예제</h2>
      <div>
        <Form
          form={form}
          name={"password-form"}
          style={{ width: 600, margin: "0 auto" }}
          onFinish={values => onFinish(values)}
        >
          <Form.Item
            name={"password"}
            label="비밀번호"
            required={true}
            rules={[
              { required: true, message: "비밀번호는 필수항목입니다." },
              {
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\[\]{};:'",.<>/?\\|`~])[A-Za-z\d!@#$%^&*()\-_=+\[\]{};:'",.<>/?\\|`~]{8,}$/,
                message: "비밀번호 형식에 맞지 않습니다.",
              },
            ]}
          >
            <Input.Password
              placeholder="비밀번호를 입력하시오."
              onChange={handleChangePassword}
            />
          </Form.Item>
          <Form.Item
            name={"passwordConfirm"}
            label="비밀번호확인"
            required={true}
          >
            <Input.Password
              placeholder="비밀번호를 확인하시오."
              onChange={handleChangePassword}
            />
          </Form.Item>
          {/* 비밀번호 비교한 결과 출력 */}
          {/* {match ? "같군요" : "다르군요"} */}
          {!match && <div style={{ color: "red" }}>비밀번호가 다릅니다.</div>}
          <Form.Item>
            <Button htmlType="submit" disabled={!match}>
              확인
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default PwForm;
