import { Modal, DYVIX_GLOBAL_ANIMATION, DYVIX_GLOBAL_THEME } from 'dyvix-ui';
import React from 'react';
export function ModalTest() {
  const testData = Array.from({ length: 1 }, (_, i) => ({
    type: 'text',
    name: `field_${i}`,
    placeholder: `Extended Field ${i + 1}`,
    amount: 1
  }));

  return (
    <Modal
      title="Register"
      Id="register-modal"
      className="modalsss"
      theme={DYVIX_GLOBAL_THEME.FROST}
      //  preset={'ResetPassword'}
      type="auth"
      elements={testData}
      onSubmit={(data) => console.log(data)}
      onChange={(data) => console.log(data)}
    />
  );
}
