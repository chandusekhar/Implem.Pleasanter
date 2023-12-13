﻿$p.display = function (defaultId) {
    var displays = {
        BadRequest: 'Invalid request.',
        BadRequest_zh: '无效请求。',
        BadRequest_ja: '要求が不正です。',
        BadRequest_de: 'Anforderung ung&#252;ltig.',
        BadRequest_ko: '유효하지 않은 요청입니다.',
        BadRequest_es: 'Solicitud no v&#225;lida.',
        BadRequest_vn: 'Y&#234;u cầu kh&#244;ng hợp lệ.',
        CanNotConnectCamera: 'Cannot connect to camera.',
        CanNotConnectCamera_zh: '无法连接至摄像机。',
        CanNotConnectCamera_ja: 'カメラに接続できません。',
        CanNotConnectCamera_de: 'Keine Verbindung zur Kamera m&#246;glich.',
        CanNotConnectCamera_ko: '카메라에 연결할 수 없습니다.',
        CanNotConnectCamera_es: 'No puede conectarse a la c&#225;mara.',
        CanNotConnectCamera_vn: 'Kh&#244;ng thể kết nối đến m&#225;y ảnh.',
        CheckAll: 'Check all',
        CheckAll_zh: '选择全部',
        CheckAll_ja: '全て選択',
        CheckAll_de: 'Alle pr&#252;fen',
        CheckAll_ko: '모두 선택',
        CheckAll_es: 'Marcar todo',
        CheckAll_vn: 'Chọn tất cả',
        ConfirmCreateLink: 'Would you like to create a link?',
        ConfirmCreateLink_zh: '是否需要创建链接？',
        ConfirmCreateLink_ja: 'リンクを作成しますか？',
        ConfirmCreateLink_de: 'M&#246;chten Sie eine Verkn&#252;pfung erstellen?',
        ConfirmCreateLink_ko: '링크를 생성하시겠습니까?',
        ConfirmCreateLink_es: '&#191;Le gustar&#237;a crear un enlace?',
        ConfirmCreateLink_vn: 'Bạn c&#243; muốn tạo li&#234;n kết kh&#244;ng?',
        ConfirmDelete: 'Are you sure you want to delete?',
        ConfirmDelete_zh: '是否确定删除？',
        ConfirmDelete_ja: '本当に削除してもよろしいですか？',
        ConfirmDelete_de: 'Tats&#228;chlich l&#246;schen?',
        ConfirmDelete_ko: '삭제하시겠습니까?',
        ConfirmDelete_es: '&#191;Est&#225; seguro de que quiere eliminar?',
        ConfirmDelete_vn: 'Bạn c&#243; chắc muốn x&#243;a kh&#244;ng?',
        ConfirmPhysicalDelete: 'This operation cannot be undone. Are you sure you want to delete?',
        ConfirmPhysicalDelete_zh: '无法撤销此操作，是否确定删除？',
        ConfirmPhysicalDelete_ja: 'この操作を行うと元に戻すことはできません。本当に削除してもよろしいですか？',
        ConfirmPhysicalDelete_de: 'Dieser Vorgang kann nicht r&#252;ckg&#228;ngig gemacht werden. Tats&#228;chlich l&#246;schen?',
        ConfirmPhysicalDelete_ko: '이 작업은 실행 취소할 수 없습니다. 삭제하시겠습니까?',
        ConfirmPhysicalDelete_es: 'Esta operaci&#243;n no puede deshacerse. &#191;Est&#225; seguro de que quiere eliminar?',
        ConfirmPhysicalDelete_vn: 'Thao t&#225;c n&#224;y kh&#244;ng thể kh&#244;i phục. Bạn c&#243; chắc muốn x&#243;a kh&#244;ng?',
        ConfirmRebuildSearchIndex: 'Would you like to rebuild the search index?',
        ConfirmRebuildSearchIndex_zh: '是否需要重建搜索索引？',
        ConfirmRebuildSearchIndex_ja: '検索インデックスを再構築しますか？',
        ConfirmRebuildSearchIndex_de: 'Soll der Suchindex neu erstellt werden?',
        ConfirmRebuildSearchIndex_ko: '검색 색인을 재구성하시겠습니까?',
        ConfirmRebuildSearchIndex_es: '&#191;Le gustar&#237;a volver a construir el &#237;ndice de b&#250;squeda?',
        ConfirmRebuildSearchIndex_vn: 'Bạn c&#243; muốn tạo lại chỉ mục t&#236;m kiếm kh&#244;ng?',
        ConfirmReload: 'Are you sure you want to reload this page?',
        ConfirmReload_ja: 'このページを離れようとしています。',
        ConfirmReload_vn: 'Bạn c&#243; muốn tải lại trang web n&#224;y kh&#244;ng?',
        ConfirmReset: 'Are you sure you want to reset?',
        ConfirmReset_zh: '是否确定重置？',
        ConfirmReset_ja: '本当にリセットしてもよろしいですか？',
        ConfirmReset_de: 'Tats&#228;chlich zur&#252;cksetzen?',
        ConfirmReset_ko: '재설정하시겠습니까?',
        ConfirmReset_es: '&#191;Est&#225; seguro de que quiere restablecer?',
        ConfirmReset_vn: 'Bạn c&#243; chắc muốn đặt lại kh&#244;ng?',
        ConfirmRestore: 'Are you sure you want to restore?',
        ConfirmRestore_zh: '是否确定恢复？',
        ConfirmRestore_ja: '本当に復元してもよろしいですか？',
        ConfirmRestore_de: 'Tats&#228;chlich wiederherstellen?',
        ConfirmRestore_ko: '복원하시겠습니까?',
        ConfirmRestore_es: '&#191;Est&#225; seguro de quiere restaurar?',
        ConfirmRestore_vn: 'Bạn c&#243; chắc muốn kh&#244;i phục kh&#244;ng?',
        ConfirmSendMail: 'Are you sure you want to send the email?',
        ConfirmSendMail_zh: '是否确定发送邮件？',
        ConfirmSendMail_ja: 'メールを送信してもよろしいですか？',
        ConfirmSendMail_de: 'Soll die E-Mail tats&#228;chlich gesendet werden?',
        ConfirmSendMail_ko: '이메일을 전송하시겠습니까?',
        ConfirmSendMail_es: '&#191;Est&#225; seguro de que quiere enviar el correo electr&#243;nico?',
        ConfirmSendMail_vn: 'Bạn c&#243; chắc muốn gửi email kh&#244;ng?',
        ConfirmSeparate: 'Are you sure you want to divide?',
        ConfirmSeparate_zh: '是否确定划分？',
        ConfirmSeparate_ja: '分割してもよろしいですか？',
        ConfirmSeparate_de: 'Tats&#228;chlich aufteilen?',
        ConfirmSeparate_ko: '분할하시겠습니까?',
        ConfirmSeparate_es: '&#191;Est&#225; seguro de que quiere dividir?',
        ConfirmSeparate_vn: 'Bạn c&#243; chắc muốn ph&#226;n t&#225;ch kh&#244;ng?',
        ConfirmSwitchTenant: 'Are you sure you want to switch tenant?',
        ConfirmSwitchTenant_zh: '您确定要切换租户吗？',
        ConfirmSwitchTenant_ja: '本当にテナント切り替えますか？',
        ConfirmSwitchTenant_de: 'Sind Sie sicher, dass Sie den Mieter wechseln m&#246;chten?',
        ConfirmSwitchTenant_ko: '테넌트를 전환 하시겠습니까?',
        ConfirmSwitchTenant_es: '&#191;Est&#225;s seguro de que quieres cambiar de inquilino?',
        ConfirmSwitchTenant_vn: 'Bạn c&#243; chắc muốn thay đổi người thu&#234; kh&#244;ng?',
        ConfirmSwitchUser: 'Are you sure you want to switch users?',
        ConfirmSwitchUser_zh: '是否确定切换用户？',
        ConfirmSwitchUser_ja: '本当にユーザを切り替えますか？',
        ConfirmSwitchUser_de: 'Soll der Benutzer tats&#228;chlich gewechselt werden?',
        ConfirmSwitchUser_ko: '사용자를 전환하시겠습니까?',
        ConfirmSwitchUser_es: '&#191;Est&#225; seguro de quiere cambiar los usuarios?',
        ConfirmSwitchUser_vn: 'Bạn c&#243; chắc muốn thay đổi người d&#249;ng kh&#244;ng?',
        ConfirmSynchronize: 'Are you sure you want to synchronize the data?',
        ConfirmSynchronize_zh: '是否确定同步数据？',
        ConfirmSynchronize_ja: 'データを同期してもよろしいですか？',
        ConfirmSynchronize_de: 'Sollen die Daten tats&#228;chlich synchronisiert werden?',
        ConfirmSynchronize_ko: '데이터를 동기화하시겠습니까?',
        ConfirmSynchronize_es: '&#191;Est&#225; seguro de que quiere sincronizar los datos?',
        ConfirmSynchronize_vn: 'Bạn c&#243; chắc muốn đồng bộ dữ liệu kh&#244;ng?',
        ConfirmUnload: 'Are you sure you want to leave this page? Changes you made may not be saved.',
        ConfirmUnload_zh: '是否确定离开此页面？离开后可能无法保存此前的变更。',
        ConfirmUnload_ja: 'このページを離れますか? 行った変更が保存されない可能性があります。',
        ConfirmUnload_de: 'M&#246;chten Sie diese Seite tats&#228;chlich verlassen? Die von Ihnen durchgef&#252;hrten &#196;nderungen werden m&#246;glicherweise nicht gespeichert.',
        ConfirmUnload_ko: '이 페이지에서 나가시겠습니까? 변경사항이 저장되지 않을 수 있습니다.',
        ConfirmUnload_es: '&#191;Est&#225; seguro de que quiere salir de este sitio? Es posible que no se guarden los cambios realizados.',
        ConfirmUnload_vn: 'Bạn c&#243; chắc muốn rời khỏi trang web n&#224;y kh&#244;ng? Thay đổi của bạn c&#243; thể sẽ kh&#244;ng được lưu.',
        ConfirmUnlockRecord: 'Are you sure you want to unlock this record?',
        ConfirmUnlockRecord_zh: '您确定要解锁此记录吗？',
        ConfirmUnlockRecord_ja: 'レコードのロックを解除してもよろしいですか？',
        ConfirmUnlockRecord_de: 'M&#246;chten Sie diesen Datensatz wirklich entsperren?',
        ConfirmUnlockRecord_ko: '이 레코드를 잠금 해제 하시겠습니까?',
        ConfirmUnlockRecord_es: '&#191;Est&#225;s seguro de que quieres desbloquear este registro?',
        ConfirmUnlockRecord_vn: 'Bạn c&#243; chắc muốn mở kh&#243;a bản ghi n&#224;y kh&#244;ng?',
        DirectUrlCopied: 'Copied to clipboard',
        DirectUrlCopied_zh: '复制到剪贴板',
        DirectUrlCopied_ja: 'クリップボードにコピーしました',
        DirectUrlCopied_de: 'In die Zwischenablage kopiert',
        DirectUrlCopied_ko: '클립보드로 복사됨',
        DirectUrlCopied_es: 'Copiado al portapapeles',
        DirectUrlCopied_vn: 'Sao ch&#233;p v&#224;o khay nhớ tạm',
        Disabled: 'Disabled',
        Disabled_zh: '已禁用',
        Disabled_ja: '無効',
        Disabled_de: 'Deaktiviert',
        Disabled_ko: '비활성화됨',
        Disabled_es: 'Desactivado',
        Disabled_vn: 'V&#244; hiệu h&#243;a',
        Hidden: 'Hidden',
        Hidden_zh: '已隐藏',
        Hidden_ja: '非表示',
        Hidden_de: 'Ausgeblendet',
        Hidden_ko: '숨긴 항목',
        Hidden_es: 'Oculto',
        Hidden_vn: 'Kh&#244;ng hiển thị',
        IncludeData: 'Include Data',
        IncludeData_zh: '包含数据',
        IncludeData_ja: 'データを含める',
        IncludeData_de: 'Daten einschlie&#223;en',
        IncludeData_ko: '데이터 포함',
        IncludeData_es: 'Incluir datos',
        IncludeData_vn: 'Bao gồm dữ liệu',
        Manager: 'Manager',
        Manager_zh: '经理',
        Manager_ja: '管理者',
        Manager_de: 'Manager',
        Manager_ko: '관리자',
        Manager_es: 'Gestor',
        Manager_vn: 'Người quản l&#237;',
        Negative: 'Negative',
        Negative_zh: '消极的',
        Negative_ja: '否定',
        Negative_de: 'Negativ',
        Negative_ko: '부정적인',
        Negative_es: 'Negativa',
        Negative_vn: 'Phủ định',
        None: 'None',
        None_zh: '没有',
        None_ja: '無し',
        None_de: 'Keiner',
        None_ko: '없음',
        None_es: 'Ninguno',
        None_vn: 'Kh&#244;ng',
        NotMatchRegex: '{0}',
        NotMatchRegex_zh: '{0}',
        NotMatchRegex_ja: '{0}',
        NotMatchRegex_de: '{0}',
        NotMatchRegex_ko: '{0}',
        NotMatchRegex_es: '{0}',
        NotMatchRegex_vn: '{0}',
        OrderAsc: 'Ascendant',
        OrderAsc_zh: '上升',
        OrderAsc_ja: '昇順',
        OrderAsc_de: 'Aufsteigend',
        OrderAsc_ko: '오름차순',
        OrderAsc_es: 'Ascendente',
        OrderAsc_vn: 'Tăng dần',
        OrderDesc: 'Descendant',
        OrderDesc_zh: '下降',
        OrderDesc_ja: '降順',
        OrderDesc_de: 'Absteigend',
        OrderDesc_ko: '내림차순',
        OrderDesc_es: 'Descendente',
        OrderDesc_vn: 'Giảm dần',
        OrderRelease: 'Release',
        OrderRelease_zh: '释放',
        OrderRelease_ja: '解除',
        OrderRelease_de: 'Freigabe',
        OrderRelease_ko: '릴리즈',
        OrderRelease_es: 'Liberar',
        OrderRelease_vn: 'Chấm dứt',
        Positive: 'Positive',
        Positive_zh: '积极的',
        Positive_ja: '肯定',
        Positive_de: 'Positiv',
        Positive_ko: '긍정적인',
        Positive_es: 'Positiva',
        Positive_vn: 'T&#237;ch cực',
        ReadOnly: 'Read only',
        ReadOnly_zh: '只读',
        ReadOnly_ja: '読取専用',
        ReadOnly_de: 'Nur lesen',
        ReadOnly_ko: '읽기 전용',
        ReadOnly_es: 'Solo lectura',
        ReadOnly_vn: 'Chỉ được đọc',
        Required: 'Required',
        Required_zh: '必填',
        Required_ja: '入力必須',
        Required_de: 'Erforderlich',
        Required_ko: '필요',
        Required_es: 'Obligatorio',
        Required_vn: 'Bắt buộc nhập',
        ResetCalendarView: 'Resetting &quot;Filters&quot;,&quot;Group by&quot; and &quot;Column&quot; because the reference site has been changed.',
        ResetCalendarView_zh: '由于参考网站已更改，正在重置“过滤器”、“分类”和“项目”。',
        ResetCalendarView_ja: '基準となるサイトが変更されるため、「フィルタ」、「分類」、「項目」をリセットします。',
        ResetCalendarView_de: '&quot;Filter&quot;, &quot;Gruppieren nach&quot; und &quot;Spalte&quot; werden zur&#252;ckgesetzt, da die Referenzseite ge&#228;ndert wurde.',
        ResetCalendarView_ko: '참조 사이트가 변경되었기 때문에 &quot;필터&quot;, &quot;그룹화 기준&quot; 및 &quot;열&quot;을 재설정합니다.',
        ResetCalendarView_es: 'Restableciendo &quot;Filtros&quot;, &quot;Agrupar por&quot; y &quot;Columna&quot; porque se cambi&#243; el sitio de referencia.',
        ResetCalendarView_vn: 'Đặt lại &quot;Bộ lọc&quot;, &quot;Nh&#243;m theo&quot; v&#224; &quot;Cột&quot; v&#236; trang tham chiếu đ&#227; bị thay đổi.',
        ResetOrder: 'Reset order',
        ResetOrder_zh: '重置顺序',
        ResetOrder_ja: 'リセット',
        ResetOrder_de: 'Reihenfolge zur&#252;cksetzen',
        ResetOrder_ko: '순서 재설정',
        ResetOrder_es: 'Restablecer orden',
        ResetOrder_vn: 'C&#224;i lại thứ tự',
        ResetTimeLineView: 'Resetting &quot;Filters&quot; and &quot;Sorters&quot; because the reference site has been changed.',
        ResetTimeLineView_zh: '由于参考网站已更改，正在重置“过滤器”和“排序器”。',
        ResetTimeLineView_ja: '基準となるサイトが変更されるため、「フィルタ」および「ソータ」をリセットします。',
        ResetTimeLineView_de: 'Zur&#252;cksetzen von &quot;Filtern&quot; und &quot;Sortierern&quot;, da sich die Referenzseite ge&#228;ndert hat.',
        ResetTimeLineView_ko: '기준 사이트가 변경되었기 때문에 &quot;필터&quot;와 &quot;소터&quot;를 재설정합니다.',
        ResetTimeLineView_es: 'Restableciendo &quot;Filtros&quot; y &quot;Ordenadores&quot; porque el sitio de referencia ha cambiado.',
        ResetTimeLineView_vn: 'Đặt lại &quot;Bộ lọc&quot; v&#224; &quot;Bộ sắp xếp&quot; v&#236; trang tham chiếu đ&#227; được thay đổi.',
        ThisMonth: 'This month',
        ThisMonth_zh: '本月',
        ThisMonth_ja: '今月',
        ThisMonth_de: 'Aktueller Monat',
        ThisMonth_ko: '이번 달',
        ThisMonth_es: 'Este mes',
        ThisMonth_vn: 'Th&#225;ng n&#224;y',
        ThisYear: 'This year',
        ThisYear_zh: '今年',
        ThisYear_ja: '今年',
        ThisYear_de: 'Dieses Jahr',
        ThisYear_ko: '올해',
        ThisYear_es: 'Este a&#241;o',
        ThisYear_vn: 'Năm nay',
        Today: 'Today',
        Today_zh: '今日',
        Today_ja: '今日',
        Today_de: 'Heute',
        Today_ko: '오늘',
        Today_es: 'Hoy',
        Today_vn: 'H&#244;m nay',
        TooLongText: 'Please enter within {0} characters.',
        TooLongText_zh: '请输入 {0} 个字符。',
        TooLongText_ja: '{0} 文字以内で入力してください。',
        TooLongText_de: 'Bitte geben Sie innerhalb von {0} Zeichen ein.',
        TooLongText_ko: '{0} 자 이내로 입력하십시오.',
        TooLongText_es: 'Por favor ingrese dentro de {0} caracteres.',
        TooLongText_vn: 'Xin mời nhập trong khoảng {0} k&#237; tự.',
        UnauthorizedRequest: 'You must be logged in to do this.',
        UnauthorizedRequest_zh: '您必须登录才能执行此操作。',
        UnauthorizedRequest_ja: 'この操作を行うにはログインが必要です。',
        UnauthorizedRequest_de: 'Sie m&#252;ssen dazu angemeldet sein.',
        UnauthorizedRequest_ko: '이 작업을 수행하려면 로그인이 필요합니다.',
        UnauthorizedRequest_es: 'Debes iniciar sesi&#243;n para hacer esto.',
        UnauthorizedRequest_vn: 'Bạn phải đăng nhập để thực hiện thao t&#225;c n&#224;y.',
        UncheckAll: 'Uncheck all',
        UncheckAll_zh: '取消全选',
        UncheckAll_ja: '全て解除',
        UncheckAll_de: 'Alle Markierungen aufheben',
        UncheckAll_ko: '모두 선택 취소',
        UncheckAll_es: 'Desmarcar todo',
        UncheckAll_vn: 'Bỏ chọn to&#224;n bộ',
        ValidateDate: 'Invalid date or time.',
        ValidateDate_zh: '日期或时间无效。',
        ValidateDate_ja: '日付または時刻が不正です。',
        ValidateDate_de: 'Datum oder Uhrzeit ung&#252;ltig.',
        ValidateDate_ko: '유효하지 않은 날짜 또는 시간입니다.',
        ValidateDate_es: 'Fecha u hora no v&#225;lida.',
        ValidateDate_vn: 'Ng&#224;y hoặc giờ kh&#244;ng hợp lệ.',
        ValidateEmail: 'Invalid email address.',
        ValidateEmail_zh: '电子邮箱地址无效。',
        ValidateEmail_ja: 'メールアドレスの形式が不正です。',
        ValidateEmail_de: 'E-Mail-Adresse ung&#252;ltig.',
        ValidateEmail_ko: '유효하지 않은 이메일 주소입니다.',
        ValidateEmail_es: 'Direcci&#243;n de correo electr&#243;nica no v&#225;lida.',
        ValidateEmail_vn: 'Định dạng địa chỉ email kh&#244;ng hợp lệ.',
        ValidateEqualTo: 'The text entered does not match.',
        ValidateEqualTo_zh: '输入的文本不匹配。',
        ValidateEqualTo_ja: '入力した文字列が一致しません。',
        ValidateEqualTo_de: 'Der eingegebene Text stimmt nicht &#252;berein.',
        ValidateEqualTo_ko: '입력한 텍스트가 일치하지 않습니다.',
        ValidateEqualTo_es: 'El texto introducido no coincide.',
        ValidateEqualTo_vn: 'Văn bản đ&#227; nhập kh&#244;ng khớp.',
        ValidateMaxLength: 'Please enter within {0} characters.',
        ValidateMaxLength_zh: '请输入 {0} 个字符。',
        ValidateMaxLength_ja: '{0} 文字以内で入力してください。',
        ValidateMaxLength_de: 'Bitte geben Sie innerhalb von {0} Zeichen ein.',
        ValidateMaxLength_ko: '{0} 자 이내로 입력하십시오.',
        ValidateMaxLength_es: 'Por favor ingrese dentro de {0} caracteres.',
        ValidateMaxLength_vn: 'Xin mời nhập trong khoảng {0} k&#237; tự.',
        ValidateMaxNumber: 'The number entered is too large.',
        ValidateMaxNumber_zh: '输入的数字过大。',
        ValidateMaxNumber_ja: '入力された数字が大きすぎます。',
        ValidateMaxNumber_de: 'Die eingegebene Zahl ist zu gro&#223;.',
        ValidateMaxNumber_ko: '입력한 숫자가 너무 큽니다.',
        ValidateMaxNumber_es: 'El n&#250;mero introducido es demasiado largo.',
        ValidateMaxNumber_vn: 'Số nhập v&#224;o qu&#225; lớn.',
        ValidateMinNumber: 'The number entered is too small.',
        ValidateMinNumber_zh: '输入的数字过小。',
        ValidateMinNumber_ja: '入力された数字が小さすぎます。',
        ValidateMinNumber_de: 'Die eingegebene Zahl ist zu klein.',
        ValidateMinNumber_ko: '입력한 숫자가 너무 작습니다.',
        ValidateMinNumber_es: 'El n&#250;mero introducido es demasiado peque&#241;o.',
        ValidateMinNumber_vn: 'Số nhập v&#224;o qu&#225; nhỏ.',
        ValidateNumber: 'Only numeric value can be entered.',
        ValidateNumber_zh: '只能输入数字。',
        ValidateNumber_ja: '数値以外入力不可です。',
        ValidateNumber_de: 'Es k&#246;nnen nur numerische Werte eingegeben werden.',
        ValidateNumber_ko: '수치값만 입력할 수 있습니다.',
        ValidateNumber_es: 'Solo pueden introducirse valores num&#233;ricos.',
        ValidateNumber_vn: 'Chỉ c&#243; thể nhập gi&#225; trị số.',
        ValidateRequired: 'This is a required field.',
        ValidateRequired_zh: '必填字段。',
        ValidateRequired_ja: '入力必須項目です。',
        ValidateRequired_de: 'Dieses Feld muss ausgef&#252;llt werden.',
        ValidateRequired_ko: '필수 입력 필드입니다.',
        ValidateRequired_es: 'Este es un campo obligatorio.',
        ValidateRequired_vn: 'Đ&#226;y l&#224; trường bắt buộc nhập.',
        ValidationError: 'The data entered is incorrect.',
        ValidationError_zh: '输入的数据错误。',
        ValidationError_ja: '入力された内容に誤りがあります。',
        ValidationError_de: 'Die eingegebenen Daten sind falsch.',
        ValidationError_ko: '입력한 데이터가 올바르지 않습니다.',
        ValidationError_es: 'El dato introducido es incorrecto.',
        ValidationError_vn: 'Nội dung nhập v&#224;o kh&#244;ng ch&#237;nh x&#225;c.'
    };
    var localId = defaultId + '_' + $('#Language').val();
    if (displays[localId]) {
        return displays[localId];
    } else if (displays[defaultId]) {
        return displays[defaultId];
    } else {
        return defaultId;
    }
}
