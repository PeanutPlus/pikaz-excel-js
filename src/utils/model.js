/*
 * @Description: 这是默认数据页面（组件）
 * @Date: 2021-01-09 14:35:20
 * @Author: zouzheng
 * @LastEditors: zouzheng
 * @LastEditTime: 2021-01-09 17:25:51
 */

// 导出数据
export const exportData = {
    // 文件类型
    bookType: 'xlsx',
    // 文件名
    filename: 'excel',
    // 是否手动导出
    manual: false,
    // 表格配置
    sheet: [],
    // 默认配置
    default: {
        sheetName: 'sheet',
        globalStyle: {
            border: {
                top: {
                    style: 'thin',
                    color: { rgb: "000000" }
                },
                bottom: {
                    style: 'thin',
                    color: { rgb: "000000" }
                },
                left: {
                    style: 'thin',
                    color: { rgb: "000000" }
                },
                right: {
                    style: 'thin',
                    color: { rgb: "000000" }
                }
            },
            font: {
                name: '宋体',
                sz: 12,
                color: { rgb: "000000" },
                bold: false,
                italic: false,
                underline: false,
                shadow: false
            },
            alignment: {
                horizontal: "center",
                vertical: "center",
                wrapText: false
            },
            fill: {
                fgColor: { rgb: "ffffff" },
            }
        },
    },
    fn: {
        // 处理数据前
        beforeStart:
            // bookType:文件类型,filename:文件名,sheet:表格数据
            (bookType, filename, sheet) => { },
        // 导出前
        beforeExport:
            // filename:文件名,sheet:表格数据,blob:文件流
            (bookType, filename, blob) => { },
        // 导出错误
        onError:
            // err:错误信息
            (err) => { }
    }
}

export const importData = {
    // 表名
    sheetNames: [],
    // 是否移除空格
    removeBlankspace: false,
    // 是否移出特殊字符
    removeSpecialchar: true,
}

// 枚举类
export const enumData = {
    // 文件类型
    bookType: ['xlsx', 'xls']
}