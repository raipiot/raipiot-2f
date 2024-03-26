import type { SupplierEntryMainInfoSubmitDto } from '@raipiot-2f/api'

import type { ModalType } from '@/shared/hooks/useModal'

interface CrudPageProps {
  mode?: ModalType
}

export function CrudPage(props: CrudPageProps) {
  const { mode } = props
  const { createModalForm } = useFormCreator<SupplierEntryMainInfoSubmitDto>()
  const [stepIndex, setStepIndex] = useState(0)

  const [mainForm] = AForm.useForm()

  const mainFormItems = createModalForm([
    {
      type: 'input',
      formItemProps: {
        label: '录入单编号'
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '创建人'
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '所属部门'
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '供应商名称'
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '登录手机号'
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '登录邮箱'
      }
    },
    {
      type: 'text-area',
      colProps: { span: 24 },
      formItemProps: {
        label: '录入说明'
      },
      textAreaProps: {
        rows: 3
      }
    }
  ])

  const mainInfoFormItems = createModalForm([
    {
      type: 'input',
      formItemProps: {
        label: '企业名称'
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '统一社会信用代码'
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '组织机构代码'
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '邓白氏码'
      }
    },
    {
      type: 'select',
      formItemProps: {
        label: '机构类型'
      },
      selectProps: {
        options: [
          { label: '工商企业', value: '1' },
          { label: '社会团体等社会组织', value: '2' },
          { label: '机关及事业单位', value: '3' },
          { label: '律所等司法机构', value: '4' },
          { label: '其他机构', value: '5' }
        ],
        allowClear: true
      }
    },
    {
      type: 'select',
      formItemProps: {
        label: '企业类型'
      },
      selectProps: {
        options: [],
        allowClear: true
      }
    },
    {
      type: 'select',
      formItemProps: {
        label: '纳税标识'
      },
      selectProps: {
        options: [],
        allowClear: true
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '注册国家/地区'
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '省/市/区'
      }
    },
    {
      type: 'text-area',
      colProps: { span: 24 },
      formItemProps: {
        label: '注册地址'
      },
      textAreaProps: {
        rows: 3
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '法人代表'
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '注册资本'
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '注册资本币种'
      }
    },
    {
      type: 'date-picker',
      formItemProps: {
        label: '成立日期'
      }
    },
    {
      type: 'date-picker',
      formItemProps: {
        label: '营业期限'
      }
    },
    {
      type: 'switch',
      formItemProps: {
        label: '长期'
      }
    },
    {
      type: 'text-area',
      colProps: { span: 24 },
      formItemProps: {
        label: '经营范围'
      },
      textAreaProps: {
        rows: 3
      }
    }
  ])

  const basicBizFormItems = createModalForm([
    {
      type: 'select',
      formItemProps: {
        label: '经营性质'
      },
      selectProps: {
        options: [
          { label: '制造商', value: '1' },
          { label: '贸易商', value: '2' },
          { label: '服务商', value: '3' },
          { label: '代理商', value: '4' },
          { label: '集成商', value: '5' },
          { label: '承包商', value: '6' },
          { label: '经销商', value: '7' }
        ],
        allowClear: true
      }
    },
    {
      type: 'select',
      formItemProps: {
        label: '行业类型'
      },
      selectProps: {
        options: [
          { label: '农林牧渔', value: '1' },
          { label: '互联网', value: '2' }
        ],
        mode: 'multiple',
        allowClear: true
      }
    },
    {
      type: 'select',
      formItemProps: {
        label: '主营品类'
      },
      selectProps: {
        options: [
          { label: '主营品类1', value: '1' },
          { label: '主营品类2', value: '2' }
        ],
        allowClear: true
      }
    },
    {
      type: 'select',
      formItemProps: {
        label: '送货服务范围'
      },
      selectProps: {
        options: [
          { label: '华中', value: '1' },
          { label: '华南', value: '2' }
        ],
        allowClear: true
      }
    },
    {
      type: 'input',
      colProps: { span: 24 },
      formItemProps: {
        label: '公司官网'
      }
    },
    {
      type: 'text-area',
      colProps: { span: 24 },
      formItemProps: {
        label: '公司介绍'
      },
      textAreaProps: {
        rows: 3
      }
    }
  ])

  const invoiceFormItems = createModalForm([
    {
      type: 'input',
      formItemProps: {
        label: '开票抬头'
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '税务登记号'
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '开户行'
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '开户行帐号'
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '税务登记地址'
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '税务登记电话'
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '收票人'
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '收票邮箱'
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '收票人手机号'
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '收票地址'
      }
    }
  ])

  const cooperateFormItems = createModalForm([
    {
      type: 'input',
      formItemProps: {
        label: '供应商名称'
      }
    },
    {
      type: 'switch',
      formItemProps: {
        label: '集团级'
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '邀请方'
      }
    },
    {
      type: 'select',
      formItemProps: {
        label: '生命周期阶段'
      },
      selectProps: {
        options: [],
        allowClear: true
      }
    },
    {
      type: 'select',
      formItemProps: {
        label: '准入品类'
      },
      selectProps: {
        options: [],
        allowClear: true
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '采购策略负责人'
      }
    },
    {
      type: 'text-area',
      colProps: { span: 24 },
      formItemProps: {
        label: '合作说明'
      },
      textAreaProps: {
        rows: 3
      }
    }
  ])

  const validationFormItems = [
    createModalForm([
      {
        type: 'select',
        colProps: { span: 24 },
        formItemProps: {
          label: '商业模式',
          labelCol: { style: { width: 200 } }
        },
        selectProps: {
          options: [
            { label: '生产商', value: '1' },
            { label: '代理商', value: '2' }
          ],
          allowClear: true
        }
      },
      {
        type: 'upload',
        colProps: { span: 24 },
        formItemProps: {
          label: 'ISO04001认证',
          labelCol: { style: { width: 200 } }
        }
      },
      {
        type: 'upload',
        colProps: { span: 24 },
        formItemProps: {
          label: 'ISO9001认证',
          labelCol: { style: { width: 200 } }
        }
      },
      {
        type: 'upload',
        colProps: { span: 24 },
        formItemProps: {
          label: '合规声明',
          labelCol: { style: { width: 200 } }
        }
      },
      {
        type: 'upload',
        colProps: { span: 24 },
        formItemProps: {
          label: '环保声明',
          labelCol: { style: { width: 200 } }
        }
      },
      {
        type: 'upload',
        colProps: { span: 24 },
        formItemProps: {
          label: '质量声明',
          labelCol: { style: { width: 200 } }
        }
      },
      {
        type: 'switch',
        colProps: { span: 24 },
        formItemProps: {
          label: '是否响应供应商保密承诺书',
          labelCol: { style: { width: 200 } }
        }
      },
      {
        type: 'input',
        colProps: { span: 24 },
        formItemProps: {
          label: '厂房面积',
          labelCol: { style: { width: 200 } }
        },
        inputProps: {
          suffix: '㎡'
        }
      },
      {
        type: 'input',
        colProps: { span: 24 },
        formItemProps: {
          label: '存储面积',
          labelCol: { style: { width: 200 } }
        },
        inputProps: {
          suffix: '㎡'
        }
      },
      {
        type: 'checkbox-group',
        colProps: { span: 24 },
        formItemProps: {
          label: '是否同意对接系统',
          labelCol: { style: { width: 200 } }
        },
        checkboxGroupProps: {
          options: [
            { label: 'ERP', value: '1' },
            { label: 'MDM', value: '2' },
            { label: 'BPM', value: '3' }
          ]
        }
      },
      {
        type: 'switch',
        colProps: { span: 24 },
        formItemProps: {
          label: '是否同意申请电子签章',
          labelCol: { style: { width: 200 } }
        }
      },
      {
        type: 'switch',
        colProps: { span: 24 },
        formItemProps: {
          label: '是否同意签署供应商声明',
          labelCol: { style: { width: 200 } }
        }
      },
      {
        type: 'switch',
        colProps: { span: 24 },
        formItemProps: {
          label: '是否购买设备保险',
          labelCol: { style: { width: 200 } }
        }
      }
    ]),
    createModalForm([
      {
        type: 'checkbox-group',
        colProps: { span: 24 },
        formItemProps: {
          label: '购买人员保险',
          labelCol: { style: { width: 200 } }
        },
        checkboxGroupProps: {
          options: [
            { label: '商业保险', value: '1' },
            { label: '社会保险', value: '2' }
          ]
        }
      },
      {
        type: 'switch',
        colProps: { span: 24 },
        formItemProps: {
          label: '是否购买厂房保险',
          labelCol: { style: { width: 200 } }
        }
      },
      {
        type: 'input',
        colProps: { span: 24 },
        formItemProps: {
          label: '行业排名',
          labelCol: { style: { width: 200 } }
        },
        inputProps: {
          suffix: '名'
        }
      },
      {
        type: 'input',
        colProps: { span: 24 },
        formItemProps: {
          label: '成立年限',
          labelCol: { style: { width: 200 } }
        },
        inputProps: {
          suffix: '年'
        }
      },
      {
        type: 'input',
        colProps: { span: 24 },
        formItemProps: {
          label: '注册资本',
          labelCol: { style: { width: 200 } }
        },
        inputProps: {
          suffix: '万元'
        }
      },
      {
        type: 'upload',
        colProps: { span: 24 },
        formItemProps: {
          label: '业绩证明',
          labelCol: { style: { width: 200 } }
        }
      },
      {
        type: 'input',
        colProps: { span: 24 },
        formItemProps: {
          label: '上年营业额',
          labelCol: { style: { width: 200 } }
        },
        inputProps: {
          suffix: '万元'
        }
      },
      {
        type: 'switch',
        colProps: { span: 24 },
        formItemProps: {
          label: '是否提供服务团队',
          labelCol: { style: { width: 200 } }
        }
      },
      {
        type: 'upload',
        colProps: { span: 24 },
        formItemProps: {
          label: '行业资质1',
          labelCol: { style: { width: 200 } }
        }
      },
      {
        type: 'upload',
        colProps: { span: 24 },
        formItemProps: {
          label: '行业资质2',
          labelCol: { style: { width: 200 } }
        }
      },
      {
        type: 'input',
        colProps: { span: 24 },
        formItemProps: {
          label: '年产量',
          labelCol: { style: { width: 200 } }
        },
        inputProps: {
          suffix: '万元'
        }
      },
      {
        type: 'input',
        colProps: { span: 24 },
        formItemProps: {
          label: '可供年产比例',
          labelCol: { style: { width: 200 } }
        },
        inputProps: {
          suffix: '%'
        }
      }
    ])
  ]

  return (
    <RpPageContainer
      pageHeaderProps={{
        backBtn: true,
        operate: (
          <ASpace>
            {mode !== 'read' && (
              <>
                <RpButton variant="delete" />
                <RpButton variant="save" />
              </>
            )}
            {stepIndex > 0 && <AButton onClick={() => setStepIndex(stepIndex - 1)}>上一步</AButton>}
            {stepIndex < 3 && (
              <AButton
                type="primary"
                onClick={() => setStepIndex(stepIndex + 1)}
              >
                下一步
              </AButton>
            )}
          </ASpace>
        )
      }}
    >
      <ACard>
        <ASteps
          current={stepIndex}
          items={[
            { title: '录入单信息' },
            { title: '企业其他信息' },
            { title: '合作信息' },
            { title: '预览' }
          ]}
          onChange={(current) => {
            setStepIndex(current)
          }}
        />
      </ACard>
      <RpForm form={mainForm}>
        <>
          {(stepIndex === 0 || stepIndex === 3) && (
            <>
              <ACard>
                <RpRow>
                  {mainFormItems.map((item, index) => (
                    <RpFormItem
                      key={index}
                      form={mainForm}
                      {...item}
                    />
                  ))}
                </RpRow>
              </ACard>

              <ACard rootClassName="!mt-4">
                <ASpace direction="vertical">
                  <ATypography>
                    <h5>登记信息</h5>
                    <p>
                      在国家工商行政管理总局登记过的企业，可上传营业执照并通过OCR识别快速录入信息。
                    </p>
                  </ATypography>
                  <RpRow>
                    {mainInfoFormItems.map((item, index) => (
                      <RpFormItem
                        key={index}
                        form={mainForm}
                        {...item}
                      />
                    ))}
                  </RpRow>
                </ASpace>
              </ACard>
            </>
          )}

          {(stepIndex === 1 || stepIndex === 3) && (
            <>
              <ACard>
                <ASpace
                  direction="vertical"
                  className="w-full"
                >
                  <ATypography>
                    <h5>基础业务信息</h5>
                    <p>
                      业务信息将会出现在您的主页上，丰富的内容有助于提高您的资质，便于更多企业快速阅览，促进交易。
                    </p>
                  </ATypography>
                  <RpRow>
                    {basicBizFormItems.map((item, index) => (
                      <RpFormItem
                        key={index}
                        form={mainForm}
                        {...item}
                      />
                    ))}
                  </RpRow>
                </ASpace>
              </ACard>

              <ACard rootClassName="!mt-4">
                <ATypography>
                  <h5>
                    <AFlex
                      justify="space-between"
                      align="center"
                    >
                      联系人
                      <RpButton
                        variant="add"
                        size="small"
                      />
                    </AFlex>
                  </h5>
                </ATypography>
                <ATable
                  rowKey="id"
                  dataSource={[]}
                  columns={[]}
                />
              </ACard>

              <ACard rootClassName="!mt-4">
                <ATypography>
                  <h5>
                    <AFlex
                      justify="space-between"
                      align="center"
                    >
                      地址
                      <RpButton
                        variant="add"
                        size="small"
                      />
                    </AFlex>
                  </h5>
                </ATypography>
                <ATable
                  rowKey="id"
                  dataSource={[]}
                  columns={[]}
                />
              </ACard>

              <ACard rootClassName="!mt-4">
                <ATypography>
                  <h5>
                    <AFlex
                      justify="space-between"
                      align="center"
                    >
                      银行信息
                      <RpButton
                        variant="add"
                        size="small"
                      />
                    </AFlex>
                  </h5>
                </ATypography>
                <ATable
                  rowKey="id"
                  dataSource={[]}
                  columns={[]}
                />
              </ACard>

              <ACard rootClassName="!mt-4">
                <ASpace
                  direction="vertical"
                  className="w-full"
                >
                  <ATypography>
                    <h5>开票信息</h5>
                  </ATypography>
                  <RpRow>
                    {invoiceFormItems.map((item, index) => (
                      <RpFormItem
                        key={index}
                        form={mainForm}
                        {...item}
                      />
                    ))}
                  </RpRow>
                </ASpace>
              </ACard>

              <ACard rootClassName="!mt-4">
                <ATypography>
                  <h5>
                    <AFlex
                      justify="space-between"
                      align="center"
                    >
                      财务信息
                      <RpButton
                        variant="add"
                        size="small"
                      />
                    </AFlex>
                  </h5>
                </ATypography>
                <ATable
                  rowKey="id"
                  dataSource={[]}
                  columns={[]}
                />
              </ACard>

              <ACard rootClassName="!mt-4">
                <ATypography>
                  <h5>
                    <AFlex
                      justify="space-between"
                      align="center"
                    >
                      附件信息
                      <RpButton
                        variant="add"
                        size="small"
                      />
                    </AFlex>
                  </h5>
                </ATypography>
                <ATable
                  rowKey="id"
                  dataSource={[]}
                  columns={[]}
                />
              </ACard>
            </>
          )}

          {(stepIndex === 2 || stepIndex === 3) && (
            <>
              <ACard>
                <RpRow>
                  {cooperateFormItems.map((item, index) => (
                    <RpFormItem
                      key={index}
                      form={mainForm}
                      {...item}
                    />
                  ))}
                </RpRow>
              </ACard>

              <ACard>
                <ASpace
                  direction="vertical"
                  className="w-full"
                >
                  <ATypography>
                    <h5>验证信息</h5>
                  </ATypography>
                  <div className="flex sm:space-x-12">
                    <div className="w-full sm:w-1/2">
                      {validationFormItems[0].map((item, index) => (
                        <RpFormItem
                          key={index}
                          form={mainForm}
                          {...item}
                        />
                      ))}
                    </div>
                    <div className="w-full sm:w-1/2">
                      {validationFormItems[1].map((item, index) => (
                        <RpFormItem
                          key={index}
                          form={mainForm}
                          {...item}
                        />
                      ))}
                    </div>
                  </div>
                </ASpace>
              </ACard>
            </>
          )}
        </>
      </RpForm>
    </RpPageContainer>
  )
}
