import React, { useState } from 'react';
import { Input, Row, Col, Select } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import { withTranslation } from 'react-i18next';
import Copy from '../../../utils/copy';

const { TextArea } = Input;
const { Option } = Select;

interface Props {
  t(code: string): string;
}

const RegexTester = ({ t }: Props) => {
  const [regex, setRegex] = useState<RegExp | undefined>(undefined);
  const [textAreaInput, setTextAreaInput] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);

  const matchRegexp = (str: string) => {
    if (regex) {
      let m;
      let resultRegex = '';

      // eslint-disable-next-line no-cond-assign
      while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
          regex.lastIndex += 1;
        }

        // The result can be accessed through the `m`-variable.
        // eslint-disable-next-line @typescript-eslint/no-loop-func
        m.forEach((match: any, groupIndex: number) => {
          if (match) {
            resultRegex += `Group ${groupIndex} Match: ${match}\n`;
          }
        });
        setResult(resultRegex);
      }
    }
  };

  const onTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    try {
      const testIntput = event.target.value;
      setTextAreaInput(testIntput);
      if (regex) {
        matchRegexp(testIntput);
      }
    } catch (error) {
      if (event.target.value) {
        setResult(error.message);
      } else {
        setResult(null);
      }
    }
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setResult(null);
      const regexValue = event.target.value;
      const regexp = new RegExp(regexValue, 'g');
      setRegex(regexp);
    } catch (error) {
      setResult(null);
    }
  };

  const handleSelectChange = (value) => {
    console.log(value);
  };

  return (
    <Row style={{ padding: '15px', height: '100%' }} gutter={[16, 16]}>
      <Col span={24}>
        <Row>
          <Col span={19}>
            <Input onChange={onInputChange} />
          </Col>
          <Col span={5}>
            <Select
              mode="multiple"
              allowClear
              placeholder="Please select"
              defaultValue={['a10', 'c12']}
              onChange={handleSelectChange}
            >
              <Option key={1} value={1}>
                g
              </Option>
              <Option key={2} value={2}>
                m
              </Option>
            </Select>
          </Col>
        </Row>
      </Col>

      <Col span={12}>
        <TextArea rows={23} onChange={onTextAreaChange} />
      </Col>
      <Col span={11} offset={1}>
        <TextArea rows={23} readOnly value={result} />
      </Col>
    </Row>
  );
};

export default withTranslation()(RegexTester);
