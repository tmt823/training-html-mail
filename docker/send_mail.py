import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# MailHogのSMTPサーバー設定
smtp_server = 'localhost'
smtp_port = 1025

# メールの内容
html_content = '''
<!DOCTYPE html>
<table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" style="max-width: 660px;">
    <tbody>
        <tr>
            <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff">
                <table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff" style="width: 100%">
                    <tbody>
                        <tr>
                            <td style="padding: 30px 0">
                                <a href="/" style="display: block; width: 100%; text-align: center">
                                    <img src="https://placehold.jp/ffcdb8/ffffff/532x120.png?text=LOGO" alt="" width="153" style="height: auto">
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
                    <tbody>
                        <tr>
                            <td> タイトルエリア </td>
                        </tr>
                    </tbody>
                </table>
                <table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
                    <tbody>
                        <tr>
                            <td> セクションエリア </td>
                        </tr>
                    </tbody>
                </table>
                <table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff" style="width: 100%">
                    <tbody>
                        <tr>
                            <td style="padding-top: 16px; border-top: 1px solid #FE152E;"></td>
                        </tr>
                        <tr>
                            <td>
                                <table style="width: 100%">
                                    <tbody>
                                        <tr style="height: 30px">
                                            <td style="width: 50%">
                                                <a href="/" style="font-size: 14px; text-decoration: none;">トップページ</a>
                                            </td>
                                            <td style="width: 50%; text-align: right;">
                                                <a href="/" style="color: #FE152E; font-size: 14px; border-radius: 54px; border: 1px solid #FE152E; padding: 6px 16px 6px 16px; text-decoration: none;">ログイン</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div style="font-size: 10px; margin-top: 16px;"> 【発行】<a href="/">わいわい</a><br> ・送信者の住所は<a href="/">こちら</a>に記載してます。<br> ・メール配信解除や購読カテゴリの変更を行う方は<a href="/">こちら</a>（設定を変更するためにはログインが必要です） </div>
                                <div style="text-align:center; font-size: 10px; margin-top: 16px;"> 2024 メルマガ研修 </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
'''

# メールのヘッダーと本文を設定
msg = MIMEMultipart('alternative')
msg['Subject'] = 'HTMLメルマガのテスト'
msg['From'] = 'sender@example.com'
msg['To'] = 'receive@example.com'

# HTMLコンテンツをメールに添付
msg.attach(MIMEText(html_content, 'html'))

# メールの送信
with smtplib.SMTP(smtp_server, smtp_port) as server:
    server.sendmail(msg['From'], [msg['To']], msg.as_string())

print("HTMLメールが送信されました。")
