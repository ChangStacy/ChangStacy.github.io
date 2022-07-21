   <script src="/profileedit.js"></script>
    <script src="/iconic-multiselect-dev/dist/multi-select-min.js"></script>
    <script src="/iconic-multiselect-dev/dist/multi-select.js"></script>
    <script>
        window.onload = () => {





            myProfileBtn.onclick = function () {

                ShowPage1.style.display = 'flex';
                // ShowPage2.style.display = 'none';
                ShowPage3.style.display = 'none';

                ShowPage5.style.display = 'none';
                photoOverlay1.style.display = 'none';

            }

            myCommentBtn.onclick = function () {

                ShowPage1.style.display = 'none';
                // ShowPage2.style.display = 'none';
                ShowPage3.style.display = 'flex';

                ShowPage5.style.display = 'none';
                // mymessage.style.display = 'flex';
                // frmessage.style.display = 'none';
                photoOverlay1.style.display = 'none';
            }


            myPhotoBtn.onclick = function () {

                ShowPage1.style.display = 'none';
                // ShowPage2.style.display = 'none';
                ShowPage3.style.display = 'none';

                ShowPage5.style.display = 'flex';
                photoOverlay1.style.display = 'none';
                uploadimgBox.style.display = 'flex';
            privatePhotobox.style.filter = ' none';
            }

            editIcon.onclick = function () {
                userinfoPage1.style.display = 'none';
                userinfoPage2.style.display = 'flex';

            }

            backuserInfo.onclick = function () {

                userinfoPage1.style.display = 'flex';
                userinfoPage2.style.display = 'none';
                // $('html, body').animate({scrollTop: $('#userinfoPage1').offset().top - 10}, 600);

            }



        }




        // 我的評論js//
        date = new Date();
        year = date.getFullYear();
        month = date.getMonth() + 1;
        day = date.getDate();
        document.getElementById("comment_date").innerHTML = year + "/" + month + "/" + day;

        // date = new Date();
        // year = date.getFullYear();
        // month = date.getMonth() + 1;
        // day = date.getDate();
        // document.getElementById("frcomment_date").innerHTML = year + "/" + month + "/" + day;





        //標籤選項//
        // $(function () {
        //     $("#datepicker").datepicker();
        // });

        // const multiSelect = new IconicMultiSelect({
        //     select: "#likeTab",
        // });

        // multiSelect.init();





        //相簿//

        function openphoto() {
            let element = document.getElementById('photoOverlay')
            element.style.display = 'block'

        }

        function closephoto() {
            let element = document.getElementById('photoOverlay')
            element.style.display = 'none'
        }

        function openphoto1() {
            let element = document.getElementById('photoOverlay1')
            element.style.display = 'block'
            uploadimgBox.style.display = 'none';
            privatePhotobox.style.filter = ' blur(2px)';

        }

        function closephoto1() {
            let element = document.getElementById('photoOverlay1')
            element.style.display = 'none'
            uploadimgBox.style.display = 'flex';
            privatePhotobox.style.filter = ' none';
        }


        function openphoto2() {
            let element = document.getElementById('photoOverlay2')
            element.style.display = 'block'

        }

        function closephoto2() {
            let element = document.getElementById('photoOverlay2')
            element.style.display = 'none'
        }















        //編輯會員選單
        var datas = [

            { title: '台北市', value: 'TPE' },
            { title: '新北市', value: 'NPE' },
            { title: '桃園市', value: 'TYC' },
            { title: '臺中市', value: 'TXG' },
            { title: '台南市', value: 'TNN' },
            { title: '高雄市', value: 'KHH' },
            { title: '新竹縣', value: 'HSZ' },
            { title: '苗栗縣', value: 'ZMI' },
            { title: '彰化縣', value: 'CHW' },
            { title: '南投縣', value: 'NTC' },
            { title: '雲林縣', value: 'YUN' },
            { title: '嘉義縣', value: 'CYC' },
            { title: '屏東縣', value: 'PIF' },
            { title: '宜蘭縣', value: 'ILA' },
            { title: '花蓮縣', value: 'HUN' },
            { title: '台東縣', value: 'TTT' },
            { title: '澎湖縣', value: 'PEH' },
            { title: '金門縣', value: 'KNH' },
            { title: '連江縣', value: 'LNN' },
            { title: '基隆市', value: 'KLU' },
            { title: '新竹市', value: 'HSC' },
            { title: '嘉義市', value: 'CYI' },
        ];


        $(function () {

            datas.map(function (data) {
                let select = (data.value === '<%=locals.CityId %>') ? "selected" : "";
                $('#myselect').append('<option value="' + data.value + '" ' + select + '>' + data.title + '</option>');
                // console.log(1);
            });
        });
        // console.log('<%=locals.CityId %>')
        // $('#myselect').val('<%=locals.CityId %>');





        // 編輯



        // function Edit(MemID) {
        //     $.ajax({
        //         url:  "/detail/"+MemID,
        //         type: "GET",
        //         success: function(res) {
        //             var res = JSON.parse(res)
        //             //將值傳遞進input裏頭
        //             $("input[name='MemID']").val(res.MemID)
        //             $("input[name='NickName']").val(res.NickName)
        //             // $("input[name='phone']").val(res.data.phone)
        //             // $("input[name='address']").val(res.data.address)
        //             // $("input[name='adult_mask']").val(res.data.adult_mask)
        //             // $("input[name='child_mask']").val(res.data.child_mask)
        //         },
        //         error: function() {
        //             alert("系統錯誤!")
        //         },
        //     })
        // }


        $('#submit').on('click', function () {
            //整理表單資料到變數
            var data = $('#form').serializeArray()
            JSONData = serializeToJSON(data)



            $.ajax({
                url: "/update",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                data: JSONData,
                success: function (res) {
                    location.reload();
                    // var res = JSON.parse(res)
                    // if (res.errno === 1) {
                    //     alert("更新成功!")
                    //     location.reload()
                    // } else if (res.errno === 0) {
                    //     alert("更新失敗!")
                    // }
                },
                error: function () {
                    alert("系統錯誤!")
                }
            })


        })


        function serializeToJSON(data) {
            var values = {};
            for (index in data) {
                values[data[index].name] = data[index].value;
            }
            return JSON.stringify(values)
        }









    </script>
