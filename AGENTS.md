# Quy ước phát triển dự án Gundam AUTOBOT Store

## Quy tắc Git (Bắt buộc tuân thủ Git Flow)

Mỗi khi người dùng yêu cầu "git", "commit", "đẩy code", "push code", trợ lý AI PHẢI tuân thủ nghiêm ngặt quy trình Git Flow sau:

1. **Tuyệt đối không commit trực tiếp vào `main` hoặc `develop`**:
   - `main`: Chỉ lưu phiên bản phát hành/chạy thực tế (production).
   - `develop`: Trục phát triển chính, nhận code thông qua Pull Request / Merge từ nhánh feature.

2. **Quy trình khi commit/push tính năng mới**:
   - Kiểm tra nhánh hiện tại (`git status`, `git branch`).
   - Luôn đảm bảo xuất phát từ nhánh `develop` mới nhất (`git checkout develop` && `git pull origin develop`).
   - Tạo nhánh tính năng theo định dạng: `feature/<ten-tinh-nang>` (Ví dụ: `feature/comments`, `feature/notifications`).
   - Commit code với thông điệp rõ ràng theo chuẩn Conventional Commits:
     - `feat(<module>): ...` (thêm tính năng mới)
     - `fix(<module>): ...` (sửa lỗi)
     - `refactor(<module>): ...` (tối ưu/cải tiến code)
   - Đẩy nhánh tính năng lên GitHub: `git push -u origin feature/<ten-tinh-nang>`.
   - Cung cấp đường link mở Pull Request (PR) từ `feature/<ten-tinh-nang>` vào `develop` cho người dùng.

## Quy ước Công nghệ Frontend
- **Framework:** React + Vite + TypeScript.
- **Thư viện UI (Bắt buộc):** **Ant Design (`antd`)** kết hợp `@ant-design/icons`.
- Khi dựng giao diện (Layout, Modal, Table, Form, Drawer, Notification...), luôn ưu tiên sử dụng các component của Ant Design để đảm bảo giao diện đồng bộ, chuyên nghiệp và chuẩn Dashboard doanh nghiệp.

## Quy tắc phong cách giao tiếp (Tránh văn mẫu robot)
Tuyệt đối không nói chuyện theo các lối mòn sau:
- Song song cú pháp quá mức.
- Nhịp điệu và độ dài câu đối xứng gượng gạo.
- Dồn ba tính từ liên tiếp.
- Khung nhị phân (cái này so với cái kia).
- Trình tự logic máy móc (Đầu tiên, sau đó, cuối cùng).
- Đoạn văn ngắt nhịp đều đều như robot.
- Dùng từ hoa mỹ, sách vở, thiếu tính đời thường.
- Khẳng định chắc nịch về cảm quan chủ quan.
- Dẫn dắt meta lòng vòng (để hiểu điều này...).
- Lặp từ ngữ để tỏ ra nhấn mạnh.
- Nói năng tự nhiên, linh hoạt, ngắn gọn, đúng trọng tâm như người thật đang trao đổi công việc.

## Quy tắc thực thi code (Cấm tự ý Vibe Code)
- Tuyệt đối không được tự ý vibe code (tự viết code một mạch mà không hướng dẫn).
- Luôn giải thích giải pháp, nêu các bước cụ thể và hướng dẫn người dùng làm từng bước.
- Chỉ khi nào người dùng có lệnh rõ ràng (ví dụ: "tự code đi", "tự vibe code đi") thì mới được tự tay viết/sửa file.
- khi được toàn quyền vibe thì chỉ đươc vibe code của mỗi dự án này buộc phải hỏi bạn có muốn vibe code .

## link git hub của dự án này 
https://github.com/Zpuc/Phuc-Autobot.git