var user_guides =
[
    [ "System Configuration User Guide", "system_configuration.html", [
      [ "IOMMU configuration", "system_configuration.html#iommu_config", null ],
      [ "Running SPDK as non-privileged user", "system_configuration.html#system_configuration_nonroot", [
        [ "Hugetlbfs access", "system_configuration.html#autotoc_md750", null ],
        [ "Device access", "system_configuration.html#system_configuration_nonroot_device_access", null ],
        [ "Memory constraints", "system_configuration.html#system_configuration_nonroot_memory_constraints", [
          [ "Increasing the memlock limit permanently", "system_configuration.html#autotoc_md751", null ],
          [ "Increasing the memlock for a specific process", "system_configuration.html#autotoc_md753", null ]
        ] ]
      ] ]
    ] ],
    [ "SPDK Libraries", "libraries.html", [
      [ "Directory Structure", "libraries.html#structure", [
        [ "lib", "libraries.html#lib", null ],
        [ "module", "libraries.html#module", null ]
      ] ],
      [ "Library Conventions", "libraries.html#conventions", [
        [ "Headers", "libraries.html#headers", null ],
        [ "Naming Conventions", "libraries.html#naming", null ],
        [ "Map Files", "libraries.html#map", null ]
      ] ],
      [ "SPDK Shared Objects", "libraries.html#shared_objects", [
        [ "Shared Object Versioning", "libraries.html#versioning", null ],
        [ "Linking to Shared Objects", "libraries.html#so_linking", null ],
        [ "Replacing the env abstraction", "libraries.html#env_replacement", null ]
      ] ],
      [ "SPDK Static Objects", "libraries.html#static_objects", null ]
    ] ],
    [ "Linking SPDK applications with pkg-config", "pkgconfig.html", null ],
    [ "An Overview of SPDK Applications", "app_overview.html", [
      [ "Configuring SPDK Applications", "app_overview.html#app_config", [
        [ "Command Line Parameters", "app_overview.html#app_cmd_line_args", [
          [ "Configuration file", "app_overview.html#cmd_arg_config_file", null ],
          [ "Limit coredump", "app_overview.html#cmd_arg_limit_coredump", null ],
          [ "Tracepoint group mask", "app_overview.html#cmd_arg_limit_tpoint_group_mask", null ],
          [ "Deferred initialization", "app_overview.html#cmd_arg_deferred_initialization", null ],
          [ "Create just one hugetlbfs file", "app_overview.html#cmd_arg_single_file_segments", null ],
          [ "Multi process mode", "app_overview.html#cmd_arg_multi_process", null ],
          [ "Memory size", "app_overview.html#cmd_arg_memory_size", null ],
          [ "Disable PCI access", "app_overview.html#cmd_arg_disable_pci_access", null ],
          [ "PCI address blocked and allowed lists", "app_overview.html#cmd_arg_pci_blocked_allowed", null ],
          [ "Unlink hugepage files after initialization", "app_overview.html#cmd_arg_huge_unlink", null ],
          [ "Log flag", "app_overview.html#cmd_arg_log_flags", null ]
        ] ],
        [ "CPU mask", "app_overview.html#cpu_mask", [
          [ "Example", "app_overview.html#autotoc_md720", null ]
        ] ]
      ] ]
    ] ],
    [ "iSCSI Target", "iscsi.html", [
      [ "iSCSI Target Getting Started Guide", "iscsi.html#iscsi_getting_started", null ],
      [ "Prerequisites", "iscsi.html#iscsi_prereqs", null ],
      [ "Introduction", "iscsi.html#autotoc_md680", [
        [ "Assigning CPU Cores to the iSCSI Target", "iscsi.html#iscsi_config_lcore", null ]
      ] ],
      [ "Configuring iSCSI Target via RPC method", "iscsi.html#iscsi_rpc", [
        [ "Portal groups", "iscsi.html#autotoc_md681", null ],
        [ "Initiator groups", "iscsi.html#autotoc_md682", null ],
        [ "Target nodes", "iscsi.html#autotoc_md683", null ]
      ] ],
      [ "Configuring iSCSI Initiator", "iscsi.html#iscsi_initiator", [
        [ "Setup", "iscsi.html#autotoc_md684", null ],
        [ "Discovery", "iscsi.html#autotoc_md685", null ],
        [ "Connect to target", "iscsi.html#autotoc_md686", null ],
        [ "Disconnect from target", "iscsi.html#autotoc_md687", null ],
        [ "Deleting target node cache", "iscsi.html#autotoc_md688", null ],
        [ "Finding /dev/sdX nodes for iSCSI LUNs", "iscsi.html#autotoc_md689", null ],
        [ "Tuning", "iscsi.html#autotoc_md690", null ],
        [ "Example: Configure simple iSCSI Target with one portal and two LUNs", "iscsi.html#autotoc_md691", [
          [ "Configure iSCSI Target", "iscsi.html#autotoc_md692", null ],
          [ "Configure initiator", "iscsi.html#autotoc_md693", null ]
        ] ]
      ] ],
      [ "iSCSI Hotplug", "iscsi.html#iscsi_hotplug", null ],
      [ "iSCSI Login Redirection", "iscsi.html#iscsi_login_redirection", null ]
    ] ],
    [ "NVMe over Fabrics Target", "nvmf.html", [
      [ "NVMe-oF Target Getting Started Guide", "nvmf.html#nvmf_getting_started", null ],
      [ "RDMA transport support", "nvmf.html#nvmf_rdma_transport", [
        [ "Prerequisites", "nvmf.html#nvmf_prereqs", null ],
        [ "Prerequisites for InfiniBand/RDMA Verbs", "nvmf.html#nvmf_prereqs_verbs", null ],
        [ "Prerequisites for RDMA NICs", "nvmf.html#nvmf_prereqs_rdma_nics", null ],
        [ "Finding RDMA NICs and associated network interfaces", "nvmf.html#autotoc_md721", [
          [ "Mellanox ConnectX-3 RDMA NICs", "nvmf.html#autotoc_md722", null ],
          [ "Mellanox ConnectX-4 RDMA NICs", "nvmf.html#autotoc_md723", null ],
          [ "Assigning IP addresses to RDMA NICs", "nvmf.html#autotoc_md724", null ]
        ] ],
        [ "RDMA Limitations", "nvmf.html#nvmf_rdma_limitations", null ]
      ] ],
      [ "TCP transport support", "nvmf.html#nvmf_tcp_transport", null ],
      [ "FC transport support", "nvmf.html#nvmf_fc_transport", [
        [ "Broadcom FC LLD code", "nvmf.html#autotoc_md725", null ],
        [ "Fetch FC LLD module and then build SPDK with FC enabled", "nvmf.html#autotoc_md726", null ]
      ] ],
      [ "Configuring the SPDK NVMe over Fabrics Target", "nvmf.html#nvmf_config", [
        [ "Using RPCs", "nvmf.html#nvmf_config_rpc", null ],
        [ "NQN Formal Definition", "nvmf.html#autotoc_md727", [
          [ "NQN Comparisons", "nvmf.html#autotoc_md728", null ]
        ] ],
        [ "Assigning CPU Cores to the NVMe over Fabrics Target", "nvmf.html#nvmf_config_lcore", null ]
      ] ],
      [ "Configuring the Linux NVMe over Fabrics Host", "nvmf.html#nvmf_host", null ],
      [ "Enabling NVMe-oF target tracepoints for offline analysis and debug", "nvmf.html#nvmf_trace", null ],
      [ "Enabling NVMe-oF Multipath", "nvmf.html#autotoc_md729", null ],
      [ "Enabling NVMe-oF TLS", "nvmf.html#autotoc_md730", [
        [ "Target setup", "nvmf.html#autotoc_md731", null ],
        [ "Initiator setup", "nvmf.html#autotoc_md732", null ]
      ] ],
      [ "NVMe-oF in-band authentication", "nvmf.html#autotoc_md733", null ],
      [ "NVMe Subsystem Reset (NSSR)", "nvmf.html#autotoc_md734", null ],
      [ "NVMe firmware update", "nvmf.html#autotoc_md735", null ]
    ] ],
    [ "vhost Target", "vhost.html", [
      [ "Table of Contents", "vhost.html#vhost_toc", null ],
      [ "Introduction", "vhost.html#vhost_intro", null ],
      [ "Prerequisites", "vhost.html#vhost_prereqs", [
        [ "Vhost Command Line Parameters", "vhost.html#vhost_cmd_line_args", null ],
        [ "Supported Guest Operating Systems", "vhost.html#autotoc_md763", null ],
        [ "QEMU", "vhost.html#autotoc_md764", null ]
      ] ],
      [ "Starting SPDK vhost target", "vhost.html#vhost_start", null ],
      [ "SPDK Configuration", "vhost.html#vhost_config", [
        [ "Create bdev (block device)", "vhost.html#vhost_bdev_create", null ],
        [ "Create a vhost device", "vhost.html#vhost_vdev_create", [
          [ "Vhost-SCSI", "vhost.html#autotoc_md765", null ],
          [ "Vhost-BLK", "vhost.html#autotoc_md766", null ]
        ] ],
        [ "QEMU", "vhost.html#vhost_qemu_config", [
          [ "Vhost-SCSI", "vhost.html#autotoc_md767", null ],
          [ "Vhost-BLK", "vhost.html#autotoc_md768", null ]
        ] ],
        [ "Example output", "vhost.html#vhost_example", null ]
      ] ],
      [ "Advanced Topics", "vhost.html#vhost_advanced_topics", [
        [ "Multi-Queue Block Layer (blk-mq)", "vhost.html#vhost_multiqueue", null ],
        [ "Hot-attach/hot-detach", "vhost.html#vhost_hotattach", [
          [ "Hot-attach", "vhost.html#autotoc_md769", null ],
          [ "Hot-detach", "vhost.html#autotoc_md770", null ]
        ] ]
      ] ],
      [ "Known bugs and limitations", "vhost.html#vhost_bugs", [
        [ "Windows virtio-blk driver before version 0.1.130-1 only works with 512-byte sectors", "vhost.html#autotoc_md771", null ],
        [ "QEMU vhost-user-blk", "vhost.html#autotoc_md772", null ]
      ] ]
    ] ],
    [ "Block Device User Guide", "bdev.html", [
      [ "Target Audience", "bdev.html#bdev_ug_targetaudience", null ],
      [ "Introduction", "bdev.html#bdev_ug_introduction", null ],
      [ "Prerequisites", "bdev.html#bdev_ug_prerequisites", null ],
      [ "Configuring Block Device Modules", "bdev.html#bdev_ug_general_rpcs", null ],
      [ "Common Block Device Configuration Examples", "bdev.html#autotoc_md694", null ],
      [ "Ceph RBD", "bdev.html#bdev_config_rbd", null ],
      [ "Crypto Virtual Bdev Module", "bdev.html#bdev_config_crypto", [
        [ "dpdk_cryptodev accel module", "bdev.html#autotoc_md695", null ],
        [ "SW accel module", "bdev.html#autotoc_md696", null ],
        [ "General workflow", "bdev.html#autotoc_md697", [
          [ "Example", "bdev.html#autotoc_md698", null ]
        ] ],
        [ "Crypto key format", "bdev.html#autotoc_md699", [
          [ "Example command", "bdev.html#autotoc_md700", null ]
        ] ],
        [ "Delete the virtual crypto block device", "bdev.html#autotoc_md701", null ],
        [ "dpdk_cryptodev mlx5_pci driver configuration", "bdev.html#autotoc_md702", null ]
      ] ],
      [ "Delay Bdev Module", "bdev.html#bdev_config_delay", null ],
      [ "GPT (GUID Partition Table)", "bdev.html#bdev_config_gpt", [
        [ "SPDK GPT partition table", "bdev.html#bdev_ug_gpt", null ],
        [ "Creating a GPT partition table using NBD", "bdev.html#bdev_ug_gpt_create_part", null ]
      ] ],
      [ "iSCSI bdev", "bdev.html#bdev_config_iscsi", null ],
      [ "Linux AIO bdev", "bdev.html#bdev_config_aio", null ],
      [ "OCF Virtual bdev", "bdev.html#bdev_config_cas", null ],
      [ "Malloc bdev", "bdev.html#bdev_config_malloc", null ],
      [ "Null", "bdev.html#bdev_config_null", null ],
      [ "NVMe bdev", "bdev.html#bdev_config_nvme", [
        [ "NVMe bdev character device", "bdev.html#bdev_config_nvme_cuse", null ]
      ] ],
      [ "Logical volumes", "bdev.html#bdev_ug_logical_volumes", [
        [ "Logical volume store", "bdev.html#bdev_ug_lvol_store", null ],
        [ "Lvols", "bdev.html#bdev_ug_lvols", null ]
      ] ],
      [ "Passthru", "bdev.html#bdev_config_passthru", null ],
      [ "RAID", "bdev.html#bdev_ug_raid", null ],
      [ "Split", "bdev.html#bdev_ug_split", null ],
      [ "Uring", "bdev.html#bdev_ug_uring", null ],
      [ "xNVMe", "bdev.html#bdev_ug_xnvme", null ],
      [ "Virtio Block", "bdev.html#bdev_config_virtio_blk", null ],
      [ "Virtio SCSI", "bdev.html#bdev_config_virtio_scsi", null ],
      [ "DAOS bdev", "bdev.html#bdev_config_daos", null ]
    ] ],
    [ "JSON-RPC", "jsonrpc.html", [
      [ "Overview", "jsonrpc.html#jsonrpc_overview", null ],
      [ "Parameters", "jsonrpc.html#autotoc_md797", [
        [ "Required parameters", "jsonrpc.html#autotoc_md798", null ],
        [ "Optional parameters", "jsonrpc.html#autotoc_md799", null ]
      ] ],
      [ "Error response message", "jsonrpc.html#jsonrpc_error_message", [
        [ "Parser error", "jsonrpc.html#jsonrpc_parser_error", null ],
        [ "Invalid params", "jsonrpc.html#jsonrpc_invalid_params", null ]
      ] ],
      [ "rpc.py", "jsonrpc.html#rpc_py", [
        [ "Generate JSON-RPC methods for current configuration", "jsonrpc.html#jsonrpc_generate", null ],
        [ "JSON-RPC Remote access", "jsonrpc.html#autotoc_md800", null ],
        [ "JSON-RPC batching", "jsonrpc.html#autotoc_md801", null ],
        [ "Adding external RPC methods", "jsonrpc.html#autotoc_md802", null ],
        [ "Converting from legacy configuration", "jsonrpc.html#jsonrpc_convert", null ]
      ] ],
      [ "App Framework", "jsonrpc.html#jsonrpc_components_app", [
        [ "spdk_kill_instance", "jsonrpc.html#rpc_spdk_kill_instance", [
          [ "Parameters", "jsonrpc.html#autotoc_md803", null ],
          [ "Example", "jsonrpc.html#autotoc_md804", null ]
        ] ],
        [ "framework_monitor_context_switch", "jsonrpc.html#rpc_framework_monitor_context_switch", [
          [ "Parameters", "jsonrpc.html#autotoc_md805", null ],
          [ "Response", "jsonrpc.html#autotoc_md806", null ],
          [ "Example", "jsonrpc.html#autotoc_md807", null ]
        ] ],
        [ "framework_start_init", "jsonrpc.html#rpc_framework_start_init", [
          [ "Parameters", "jsonrpc.html#autotoc_md808", null ],
          [ "Response", "jsonrpc.html#autotoc_md809", null ],
          [ "Example", "jsonrpc.html#autotoc_md810", null ]
        ] ],
        [ "framework_wait_init", "jsonrpc.html#rpc_framework_wait_init", [
          [ "Parameters", "jsonrpc.html#autotoc_md811", null ],
          [ "Response", "jsonrpc.html#autotoc_md812", null ],
          [ "Example", "jsonrpc.html#autotoc_md813", null ]
        ] ],
        [ "rpc_get_methods", "jsonrpc.html#rpc_rpc_get_methods", [
          [ "Parameters", "jsonrpc.html#autotoc_md814", null ],
          [ "Response", "jsonrpc.html#autotoc_md815", null ],
          [ "Example", "jsonrpc.html#autotoc_md816", null ]
        ] ],
        [ "framework_get_subsystems", "jsonrpc.html#rpc_framework_get_subsystems", [
          [ "Parameters", "jsonrpc.html#autotoc_md817", null ],
          [ "Response", "jsonrpc.html#autotoc_md818", null ],
          [ "Example", "jsonrpc.html#autotoc_md819", null ]
        ] ],
        [ "framework_get_config", "jsonrpc.html#rpc_framework_get_config", [
          [ "Parameters", "jsonrpc.html#autotoc_md820", null ],
          [ "Response", "jsonrpc.html#autotoc_md821", null ],
          [ "Example", "jsonrpc.html#autotoc_md822", null ]
        ] ],
        [ "framework_get_reactors", "jsonrpc.html#rpc_framework_get_reactors", [
          [ "Parameters", "jsonrpc.html#autotoc_md823", null ],
          [ "Response", "jsonrpc.html#autotoc_md824", null ],
          [ "Example", "jsonrpc.html#autotoc_md825", null ]
        ] ],
        [ "framework_set_scheduler", "jsonrpc.html#rpc_framework_set_scheduler", [
          [ "Parameters", "jsonrpc.html#autotoc_md826", null ],
          [ "Response", "jsonrpc.html#autotoc_md827", null ],
          [ "Example", "jsonrpc.html#autotoc_md828", null ]
        ] ],
        [ "framework_get_scheduler", "jsonrpc.html#rpc_framework_get_scheduler", [
          [ "Parameters", "jsonrpc.html#autotoc_md829", null ],
          [ "Response", "jsonrpc.html#autotoc_md830", null ],
          [ "Example", "jsonrpc.html#autotoc_md831", null ]
        ] ],
        [ "framework_get_governor", "jsonrpc.html#rpc_framework_get_governor", [
          [ "Parameters", "jsonrpc.html#autotoc_md832", null ],
          [ "Response", "jsonrpc.html#autotoc_md833", null ],
          [ "Example", "jsonrpc.html#autotoc_md834", null ]
        ] ],
        [ "scheduler_set_options", "jsonrpc.html#rpc_scheduler_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md835", null ],
          [ "Example", "jsonrpc.html#autotoc_md836", null ]
        ] ],
        [ "framework_enable_cpumask_locks", "jsonrpc.html#rpc_framework_enable_cpumask_locks", [
          [ "Parameters", "jsonrpc.html#autotoc_md837", null ],
          [ "Response", "jsonrpc.html#autotoc_md838", null ],
          [ "Example", "jsonrpc.html#autotoc_md839", null ]
        ] ],
        [ "framework_disable_cpumask_locks", "jsonrpc.html#rpc_framework_disable_cpumask_locks", [
          [ "Parameters", "jsonrpc.html#autotoc_md840", null ],
          [ "Response", "jsonrpc.html#autotoc_md841", null ],
          [ "Example", "jsonrpc.html#autotoc_md842", null ]
        ] ],
        [ "thread_get_stats", "jsonrpc.html#rpc_thread_get_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md843", null ],
          [ "Response", "jsonrpc.html#autotoc_md844", null ],
          [ "Example", "jsonrpc.html#autotoc_md845", null ]
        ] ],
        [ "thread_set_cpumask", "jsonrpc.html#rpc_thread_set_cpumask", [
          [ "Parameters", "jsonrpc.html#autotoc_md846", null ],
          [ "Response", "jsonrpc.html#autotoc_md847", null ],
          [ "Example", "jsonrpc.html#autotoc_md848", null ]
        ] ],
        [ "trace_enable_tpoint_group", "jsonrpc.html#rpc_trace_enable_tpoint_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md849", null ],
          [ "Example", "jsonrpc.html#autotoc_md850", null ]
        ] ],
        [ "trace_disable_tpoint_group", "jsonrpc.html#rpc_trace_disable_tpoint_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md851", null ],
          [ "Example", "jsonrpc.html#autotoc_md852", null ]
        ] ],
        [ "trace_set_tpoint_mask", "jsonrpc.html#rpc_trace_set_tpoint_mask", [
          [ "Parameters", "jsonrpc.html#autotoc_md853", null ],
          [ "Example", "jsonrpc.html#autotoc_md854", null ]
        ] ],
        [ "trace_clear_tpoint_mask", "jsonrpc.html#rpc_trace_clear_tpoint_mask", [
          [ "Parameters", "jsonrpc.html#autotoc_md855", null ],
          [ "Example", "jsonrpc.html#autotoc_md856", null ]
        ] ],
        [ "trace_get_tpoint_group_mask", "jsonrpc.html#rpc_trace_get_tpoint_group_mask", [
          [ "Parameters", "jsonrpc.html#autotoc_md857", null ],
          [ "Example", "jsonrpc.html#autotoc_md858", null ]
        ] ],
        [ "trace_clear", "jsonrpc.html#rpc_trace_clear", [
          [ "Parameters", "jsonrpc.html#autotoc_md859", null ],
          [ "Example", "jsonrpc.html#autotoc_md860", null ]
        ] ],
        [ "trace_get_info", "jsonrpc.html#rpc_trace_get_info", [
          [ "Parameters", "jsonrpc.html#autotoc_md861", null ],
          [ "Example", "jsonrpc.html#autotoc_md862", null ]
        ] ],
        [ "log_set_print_level", "jsonrpc.html#rpc_log_set_print_level", [
          [ "Parameters", "jsonrpc.html#autotoc_md863", null ],
          [ "Example", "jsonrpc.html#autotoc_md864", null ]
        ] ],
        [ "log_get_print_level", "jsonrpc.html#rpc_log_get_print_level", [
          [ "Parameters", "jsonrpc.html#autotoc_md865", null ],
          [ "Example", "jsonrpc.html#autotoc_md866", null ]
        ] ],
        [ "log_set_level", "jsonrpc.html#rpc_log_set_level", [
          [ "Parameters", "jsonrpc.html#autotoc_md867", null ],
          [ "Example", "jsonrpc.html#autotoc_md868", null ]
        ] ],
        [ "log_get_level", "jsonrpc.html#rpc_log_get_level", [
          [ "Parameters", "jsonrpc.html#autotoc_md869", null ],
          [ "Example", "jsonrpc.html#autotoc_md870", null ]
        ] ],
        [ "log_set_flag", "jsonrpc.html#rpc_log_set_flag", [
          [ "Parameters", "jsonrpc.html#autotoc_md871", null ],
          [ "Example", "jsonrpc.html#autotoc_md872", null ]
        ] ],
        [ "log_clear_flag", "jsonrpc.html#rpc_log_clear_flag", [
          [ "Parameters", "jsonrpc.html#autotoc_md873", null ],
          [ "Example", "jsonrpc.html#autotoc_md874", null ]
        ] ],
        [ "log_get_flags", "jsonrpc.html#rpc_log_get_flags", [
          [ "Parameters", "jsonrpc.html#autotoc_md875", null ],
          [ "Example", "jsonrpc.html#autotoc_md876", null ]
        ] ],
        [ "log_enable_timestamps", "jsonrpc.html#rpc_log_enable_timestamps", [
          [ "Parameters", "jsonrpc.html#autotoc_md877", null ],
          [ "Example", "jsonrpc.html#autotoc_md878", null ]
        ] ],
        [ "thread_get_pollers", "jsonrpc.html#rpc_thread_get_pollers", [
          [ "Parameters", "jsonrpc.html#autotoc_md879", null ],
          [ "Response", "jsonrpc.html#autotoc_md880", null ],
          [ "Example", "jsonrpc.html#autotoc_md881", null ]
        ] ],
        [ "thread_get_io_channels", "jsonrpc.html#rpc_thread_get_io_channels", [
          [ "Parameters", "jsonrpc.html#autotoc_md882", null ],
          [ "Response", "jsonrpc.html#autotoc_md883", null ],
          [ "Example", "jsonrpc.html#autotoc_md884", null ]
        ] ],
        [ "env_dpdk_get_mem_stats", "jsonrpc.html#rpc_env_dpdk_get_mem_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md885", null ],
          [ "Response", "jsonrpc.html#autotoc_md886", null ],
          [ "Example", "jsonrpc.html#autotoc_md887", null ]
        ] ]
      ] ],
      [ "Acceleration Framework Layer", "jsonrpc.html#jsonrpc_components_accel_fw", [
        [ "accel_get_module_info", "jsonrpc.html#rpc_accel_get_module_info", [
          [ "Parameters", "jsonrpc.html#autotoc_md888", null ],
          [ "Example", "jsonrpc.html#autotoc_md889", null ]
        ] ],
        [ "accel_get_opc_assignments", "jsonrpc.html#rpc_accel_get_opc_assignments", [
          [ "Parameters", "jsonrpc.html#autotoc_md890", null ],
          [ "Example", "jsonrpc.html#autotoc_md891", null ]
        ] ],
        [ "accel_assign_opc", "jsonrpc.html#rpc_accel_assign_opc", [
          [ "Parameters", "jsonrpc.html#autotoc_md892", null ],
          [ "Example", "jsonrpc.html#autotoc_md893", null ]
        ] ],
        [ "accel_crypto_key_create", "jsonrpc.html#rpc_accel_crypto_key_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md894", null ],
          [ "Example", "jsonrpc.html#autotoc_md895", null ]
        ] ],
        [ "accel_crypto_key_destroy", "jsonrpc.html#rpc_accel_crypto_key_destroy", [
          [ "Parameters", "jsonrpc.html#autotoc_md896", null ],
          [ "Example", "jsonrpc.html#autotoc_md897", null ]
        ] ],
        [ "accel_crypto_keys_get", "jsonrpc.html#rpc_accel_crypto_keys_get", [
          [ "Parameters", "jsonrpc.html#autotoc_md898", null ],
          [ "Example", "jsonrpc.html#autotoc_md899", null ]
        ] ],
        [ "accel_set_driver", "jsonrpc.html#rpc_accel_set_driver", [
          [ "Parameters", "jsonrpc.html#autotoc_md900", null ],
          [ "Example", "jsonrpc.html#autotoc_md901", null ]
        ] ],
        [ "accel_set_options", "jsonrpc.html#rpc_accel_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md902", null ],
          [ "Example", "jsonrpc.html#autotoc_md903", null ]
        ] ],
        [ "accel_get_stats", "jsonrpc.html#rpc_accel_get_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md904", null ],
          [ "Example", "jsonrpc.html#autotoc_md905", null ]
        ] ],
        [ "accel_error_inject_error", "jsonrpc.html#rpc_accel_error_inject_error", [
          [ "Parameters", "jsonrpc.html#autotoc_md906", null ],
          [ "Example", "jsonrpc.html#autotoc_md907", null ]
        ] ],
        [ "compressdev_scan_accel_module", "jsonrpc.html#rpc_compressdev_scan_accel_module", [
          [ "Parameters", "jsonrpc.html#autotoc_md908", null ],
          [ "Example", "jsonrpc.html#autotoc_md909", null ]
        ] ],
        [ "dsa_scan_accel_module", "jsonrpc.html#rpc_dsa_scan_accel_module", [
          [ "Parameters", "jsonrpc.html#autotoc_md910", null ],
          [ "Example", "jsonrpc.html#autotoc_md911", null ]
        ] ],
        [ "iaa_scan_accel_module", "jsonrpc.html#rpc_iaa_scan_accel_module", [
          [ "Parameters", "jsonrpc.html#autotoc_md912", null ],
          [ "Example", "jsonrpc.html#autotoc_md913", null ]
        ] ],
        [ "ioat_scan_accel_module", "jsonrpc.html#rpc_ioat_scan_accel_module", [
          [ "Parameters", "jsonrpc.html#autotoc_md914", null ],
          [ "Example", "jsonrpc.html#autotoc_md915", null ]
        ] ],
        [ "ae4dma_scan_accel_module", "jsonrpc.html#rpc_ae4dma_scan_accel_module", [
          [ "Parameters", "jsonrpc.html#autotoc_md916", null ],
          [ "Example", "jsonrpc.html#autotoc_md917", null ]
        ] ],
        [ "cuda_scan_accel_module", "jsonrpc.html#rpc_cuda_scan_accel_module", [
          [ "Parameters", "jsonrpc.html#autotoc_md918", null ],
          [ "Example", "jsonrpc.html#autotoc_md919", null ]
        ] ],
        [ "dpdk_cryptodev_scan_accel_module", "jsonrpc.html#rpc_dpdk_cryptodev_scan_accel_module", [
          [ "Parameters", "jsonrpc.html#autotoc_md920", null ],
          [ "Example", "jsonrpc.html#autotoc_md921", null ]
        ] ],
        [ "dpdk_cryptodev_set_driver", "jsonrpc.html#rpc_dpdk_cryptodev_set_driver", [
          [ "Parameters", "jsonrpc.html#autotoc_md922", null ],
          [ "Example", "jsonrpc.html#autotoc_md923", null ]
        ] ],
        [ "dpdk_cryptodev_get_driver", "jsonrpc.html#rpc_dpdk_cryptodev_get_driver", [
          [ "Parameters", "jsonrpc.html#autotoc_md924", null ],
          [ "Example", "jsonrpc.html#autotoc_md925", null ]
        ] ],
        [ "mlx5_scan_accel_module", "jsonrpc.html#rpc_mlx5_scan_accel_module", [
          [ "Parameters", "jsonrpc.html#autotoc_md926", null ],
          [ "Example", "jsonrpc.html#autotoc_md927", null ]
        ] ],
        [ "accel_mlx5_dump_stats", "jsonrpc.html#rpc_accel_mlx5_dump_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md928", null ],
          [ "Example", "jsonrpc.html#autotoc_md929", null ]
        ] ]
      ] ],
      [ "Block Device Abstraction Layer", "jsonrpc.html#jsonrpc_components_bdev", [
        [ "bdev_set_options", "jsonrpc.html#rpc_bdev_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md930", null ],
          [ "Example", "jsonrpc.html#autotoc_md931", null ]
        ] ],
        [ "bdev_get_bdevs", "jsonrpc.html#rpc_bdev_get_bdevs", [
          [ "Parameters", "jsonrpc.html#autotoc_md932", null ],
          [ "Response", "jsonrpc.html#autotoc_md933", null ],
          [ "Example", "jsonrpc.html#autotoc_md934", null ]
        ] ],
        [ "bdev_examine", "jsonrpc.html#rpc_bdev_examine", [
          [ "Parameters", "jsonrpc.html#autotoc_md935", null ],
          [ "Response", "jsonrpc.html#autotoc_md936", null ],
          [ "Example", "jsonrpc.html#autotoc_md937", null ]
        ] ],
        [ "bdev_wait_for_examine", "jsonrpc.html#rpc_bdev_wait_for_examine", [
          [ "Parameters", "jsonrpc.html#autotoc_md938", null ],
          [ "Response", "jsonrpc.html#autotoc_md939", null ],
          [ "Example", "jsonrpc.html#autotoc_md940", null ]
        ] ],
        [ "bdev_get_iostat", "jsonrpc.html#rpc_bdev_get_iostat", [
          [ "Parameters", "jsonrpc.html#autotoc_md941", null ],
          [ "Response", "jsonrpc.html#autotoc_md942", null ],
          [ "Example", "jsonrpc.html#autotoc_md943", null ]
        ] ],
        [ "bdev_reset_iostat", "jsonrpc.html#rpc_bdev_reset_iostat", [
          [ "Parameters", "jsonrpc.html#autotoc_md944", null ],
          [ "Example", "jsonrpc.html#autotoc_md945", null ]
        ] ],
        [ "bdev_enable_histogram", "jsonrpc.html#rpc_bdev_enable_histogram", [
          [ "Parameters", "jsonrpc.html#autotoc_md946", null ],
          [ "Example", "jsonrpc.html#autotoc_md947", null ]
        ] ],
        [ "bdev_get_histogram", "jsonrpc.html#rpc_bdev_get_histogram", [
          [ "Parameters", "jsonrpc.html#autotoc_md948", null ],
          [ "Response", "jsonrpc.html#autotoc_md949", null ],
          [ "Example", "jsonrpc.html#autotoc_md950", null ]
        ] ],
        [ "bdev_get_histogram_borders", "jsonrpc.html#rpc_bdev_get_histogram_borders", [
          [ "Parameters", "jsonrpc.html#autotoc_md951", null ],
          [ "Response", "jsonrpc.html#autotoc_md952", null ],
          [ "Example", "jsonrpc.html#autotoc_md953", null ]
        ] ],
        [ "bdev_set_qos_limit", "jsonrpc.html#rpc_bdev_set_qos_limit", [
          [ "Parameters", "jsonrpc.html#autotoc_md954", null ],
          [ "Example", "jsonrpc.html#autotoc_md955", null ]
        ] ],
        [ "bdev_set_qd_sampling_period", "jsonrpc.html#rpc_bdev_set_qd_sampling_period", [
          [ "Parameters", "jsonrpc.html#autotoc_md956", null ],
          [ "Example", "jsonrpc.html#autotoc_md957", null ]
        ] ],
        [ "bdev_crypto_create", "jsonrpc.html#rpc_bdev_crypto_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md958", null ],
          [ "Response", "jsonrpc.html#autotoc_md959", null ],
          [ "Example", "jsonrpc.html#autotoc_md960", null ]
        ] ],
        [ "bdev_crypto_delete", "jsonrpc.html#rpc_bdev_crypto_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md961", null ],
          [ "Example", "jsonrpc.html#autotoc_md962", null ]
        ] ],
        [ "bdev_ocf_create", "jsonrpc.html#rpc_bdev_ocf_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md963", null ],
          [ "Response", "jsonrpc.html#autotoc_md964", null ],
          [ "Example", "jsonrpc.html#autotoc_md965", null ]
        ] ],
        [ "bdev_ocf_delete", "jsonrpc.html#rpc_bdev_ocf_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md966", null ],
          [ "Example", "jsonrpc.html#autotoc_md967", null ]
        ] ],
        [ "bdev_ocf_get_stats", "jsonrpc.html#rpc_bdev_ocf_get_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md968", null ],
          [ "Response", "jsonrpc.html#autotoc_md969", null ],
          [ "Example", "jsonrpc.html#autotoc_md970", null ]
        ] ],
        [ "bdev_ocf_reset_stats", "jsonrpc.html#rpc_bdev_ocf_reset_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md971", null ],
          [ "Response", "jsonrpc.html#autotoc_md972", null ],
          [ "Example", "jsonrpc.html#autotoc_md973", null ]
        ] ],
        [ "bdev_ocf_get_bdevs", "jsonrpc.html#rpc_bdev_ocf_get_bdevs", [
          [ "Parameters", "jsonrpc.html#autotoc_md974", null ],
          [ "Response", "jsonrpc.html#autotoc_md975", null ],
          [ "Example", "jsonrpc.html#autotoc_md976", null ]
        ] ],
        [ "bdev_ocf_set_cache_mode", "jsonrpc.html#rpc_bdev_ocf_set_cache_mode", [
          [ "Parameters", "jsonrpc.html#autotoc_md977", null ],
          [ "Response", "jsonrpc.html#autotoc_md978", null ],
          [ "Example", "jsonrpc.html#autotoc_md979", null ]
        ] ],
        [ "bdev_ocf_set_seqcutoff", "jsonrpc.html#rpc_bdev_ocf_set_seqcutoff", [
          [ "Parameters", "jsonrpc.html#autotoc_md980", null ],
          [ "Example", "jsonrpc.html#autotoc_md981", null ]
        ] ],
        [ "bdev_ocf_flush_start", "jsonrpc.html#rpc_bdev_ocf_flush_start", [
          [ "Parameters", "jsonrpc.html#autotoc_md982", null ],
          [ "Example", "jsonrpc.html#autotoc_md983", null ]
        ] ],
        [ "bdev_ocf_flush_status", "jsonrpc.html#rpc_bdev_ocf_flush_status", [
          [ "Parameters", "jsonrpc.html#autotoc_md984", null ],
          [ "Response", "jsonrpc.html#autotoc_md985", null ],
          [ "Example", "jsonrpc.html#autotoc_md986", null ]
        ] ],
        [ "bdev_malloc_create", "jsonrpc.html#rpc_bdev_malloc_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md987", null ],
          [ "Response", "jsonrpc.html#autotoc_md988", null ],
          [ "Example", "jsonrpc.html#autotoc_md989", null ]
        ] ],
        [ "bdev_malloc_delete", "jsonrpc.html#rpc_bdev_malloc_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md990", null ],
          [ "Example", "jsonrpc.html#autotoc_md991", null ]
        ] ],
        [ "bdev_null_create", "jsonrpc.html#rpc_bdev_null_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md992", null ],
          [ "Response", "jsonrpc.html#autotoc_md993", null ],
          [ "Example", "jsonrpc.html#autotoc_md994", null ]
        ] ],
        [ "bdev_null_delete", "jsonrpc.html#rpc_bdev_null_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md995", null ],
          [ "Example", "jsonrpc.html#autotoc_md996", null ]
        ] ],
        [ "bdev_null_resize", "jsonrpc.html#rpc_bdev_null_resize", [
          [ "Parameters", "jsonrpc.html#autotoc_md997", null ],
          [ "Example", "jsonrpc.html#autotoc_md998", null ]
        ] ],
        [ "bdev_aio_create", "jsonrpc.html#rpc_bdev_aio_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md999", null ],
          [ "Response", "jsonrpc.html#autotoc_md1000", null ],
          [ "Example", "jsonrpc.html#autotoc_md1001", null ]
        ] ],
        [ "bdev_aio_rescan", "jsonrpc.html#rpc_bdev_aio_rescan", [
          [ "Parameters", "jsonrpc.html#autotoc_md1002", null ],
          [ "Example", "jsonrpc.html#autotoc_md1003", null ]
        ] ],
        [ "bdev_aio_delete", "jsonrpc.html#rpc_bdev_aio_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md1004", null ],
          [ "Example", "jsonrpc.html#autotoc_md1005", null ]
        ] ],
        [ "bdev_nvme_set_options", "jsonrpc.html#rpc_bdev_nvme_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md1006", null ],
          [ "Example", "jsonrpc.html#autotoc_md1007", null ]
        ] ],
        [ "bdev_nvme_set_hotplug", "jsonrpc.html#rpc_bdev_nvme_set_hotplug", [
          [ "Parameters", "jsonrpc.html#autotoc_md1008", null ],
          [ "Example", "jsonrpc.html#autotoc_md1009", null ]
        ] ],
        [ "bdev_nvme_attach_controller", "jsonrpc.html#rpc_bdev_nvme_attach_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md1010", null ],
          [ "Response", "jsonrpc.html#autotoc_md1011", null ],
          [ "Example", "jsonrpc.html#autotoc_md1012", null ]
        ] ],
        [ "bdev_nvme_get_controllers", "jsonrpc.html#rpc_bdev_nvme_get_controllers", [
          [ "Parameters", "jsonrpc.html#autotoc_md1013", null ],
          [ "Response", "jsonrpc.html#autotoc_md1014", null ],
          [ "Example", "jsonrpc.html#autotoc_md1015", null ]
        ] ],
        [ "bdev_nvme_detach_controller", "jsonrpc.html#rpc_bdev_nvme_detach_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md1016", null ],
          [ "Example", "jsonrpc.html#autotoc_md1017", null ]
        ] ],
        [ "bdev_nvme_reset_controller", "jsonrpc.html#rpc_bdev_nvme_reset_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md1018", null ],
          [ "Example", "jsonrpc.html#autotoc_md1019", null ]
        ] ],
        [ "bdev_nvme_enable_controller", "jsonrpc.html#rpc_bdev_nvme_enable_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md1020", null ],
          [ "Example", "jsonrpc.html#autotoc_md1021", null ]
        ] ],
        [ "bdev_nvme_disable_controller", "jsonrpc.html#rpc_bdev_nvme_disable_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md1022", null ],
          [ "Example", "jsonrpc.html#autotoc_md1023", null ]
        ] ],
        [ "bdev_nvme_start_discovery", "jsonrpc.html#rpc_bdev_nvme_start_discovery", [
          [ "Parameters", "jsonrpc.html#autotoc_md1024", null ],
          [ "Example", "jsonrpc.html#autotoc_md1025", null ]
        ] ],
        [ "bdev_nvme_stop_discovery", "jsonrpc.html#rpc_bdev_nvme_stop_discovery", [
          [ "Parameters", "jsonrpc.html#autotoc_md1026", null ],
          [ "Example", "jsonrpc.html#autotoc_md1027", null ]
        ] ],
        [ "bdev_nvme_get_discovery_info", "jsonrpc.html#rpc_bdev_nvme_get_discovery_info", [
          [ "Parameters", "jsonrpc.html#autotoc_md1028", null ],
          [ "Example", "jsonrpc.html#autotoc_md1029", null ]
        ] ],
        [ "bdev_nvme_get_io_paths", "jsonrpc.html#rpc_bdev_nvme_get_io_paths", [
          [ "Parameters", "jsonrpc.html#autotoc_md1030", null ],
          [ "Example", "jsonrpc.html#autotoc_md1031", null ]
        ] ],
        [ "bdev_nvme_set_preferred_path", "jsonrpc.html#rpc_bdev_nvme_set_preferred_path", [
          [ "Parameters", "jsonrpc.html#autotoc_md1032", null ],
          [ "Example", "jsonrpc.html#autotoc_md1033", null ]
        ] ],
        [ "bdev_nvme_set_multipath_policy", "jsonrpc.html#rpc_bdev_nvme_set_multipath_policy", [
          [ "Parameters", "jsonrpc.html#autotoc_md1034", null ],
          [ "Example", "jsonrpc.html#autotoc_md1035", null ]
        ] ],
        [ "bdev_nvme_get_path_iostat", "jsonrpc.html#rpc_bdev_nvme_get_path_iostat", [
          [ "Parameters", "jsonrpc.html#autotoc_md1036", null ],
          [ "Example", "jsonrpc.html#autotoc_md1037", null ]
        ] ],
        [ "bdev_nvme_cuse_register", "jsonrpc.html#rpc_bdev_nvme_cuse_register", [
          [ "Parameters", "jsonrpc.html#autotoc_md1038", null ],
          [ "Example", "jsonrpc.html#autotoc_md1039", null ]
        ] ],
        [ "bdev_nvme_cuse_unregister", "jsonrpc.html#rpc_bdev_nvme_cuse_unregister", [
          [ "Parameters", "jsonrpc.html#autotoc_md1040", null ],
          [ "Example", "jsonrpc.html#autotoc_md1041", null ]
        ] ],
        [ "bdev_nvme_set_keys", "jsonrpc.html#rpc_bdev_nvme_set_keys", [
          [ "Parameters", "jsonrpc.html#autotoc_md1042", null ],
          [ "Example", "jsonrpc.html#autotoc_md1043", null ]
        ] ],
        [ "bdev_zone_block_create", "jsonrpc.html#rpc_bdev_zone_block_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md1044", null ],
          [ "Example", "jsonrpc.html#autotoc_md1045", null ]
        ] ],
        [ "bdev_zone_block_delete", "jsonrpc.html#rpc_bdev_zone_block_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md1046", null ],
          [ "Example", "jsonrpc.html#autotoc_md1047", null ]
        ] ],
        [ "bdev_nvme_apply_firmware", "jsonrpc.html#rpc_bdev_nvme_apply_firmware", [
          [ "Parameters", "jsonrpc.html#autotoc_md1048", null ],
          [ "Example", "jsonrpc.html#autotoc_md1049", null ]
        ] ],
        [ "bdev_nvme_get_transport_statistics", "jsonrpc.html#rpc_bdev_nvme_get_transport_statistics", [
          [ "Parameters", "jsonrpc.html#autotoc_md1050", null ],
          [ "Response", "jsonrpc.html#autotoc_md1051", null ],
          [ "Example", "jsonrpc.html#autotoc_md1052", null ]
        ] ],
        [ "bdev_nvme_get_controller_health_info", "jsonrpc.html#rpc_bdev_nvme_get_controller_health_info", [
          [ "Parameters", "jsonrpc.html#autotoc_md1053", null ],
          [ "Response", "jsonrpc.html#autotoc_md1054", null ],
          [ "Example", "jsonrpc.html#autotoc_md1055", null ]
        ] ],
        [ "bdev_rbd_register_cluster", "jsonrpc.html#rpc_bdev_rbd_register_cluster", [
          [ "Parameters", "jsonrpc.html#autotoc_md1056", null ],
          [ "Response", "jsonrpc.html#autotoc_md1057", null ],
          [ "Example", "jsonrpc.html#autotoc_md1058", null ]
        ] ],
        [ "bdev_rbd_unregister_cluster", "jsonrpc.html#rpc_bdev_rbd_unregister_cluster", [
          [ "Parameters", "jsonrpc.html#autotoc_md1059", null ],
          [ "Response", "jsonrpc.html#autotoc_md1060", null ],
          [ "Example", "jsonrpc.html#autotoc_md1061", null ]
        ] ],
        [ "bdev_rbd_get_clusters_info", "jsonrpc.html#rpc_bdev_rbd_get_clusters_info", [
          [ "Parameters", "jsonrpc.html#autotoc_md1062", null ],
          [ "Response", "jsonrpc.html#autotoc_md1063", null ],
          [ "Example", "jsonrpc.html#autotoc_md1064", null ]
        ] ],
        [ "bdev_rbd_create", "jsonrpc.html#rpc_bdev_rbd_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md1065", null ],
          [ "Response", "jsonrpc.html#autotoc_md1066", null ],
          [ "Example", "jsonrpc.html#autotoc_md1067", null ]
        ] ],
        [ "bdev_rbd_delete", "jsonrpc.html#rpc_bdev_rbd_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md1068", null ],
          [ "Response", "jsonrpc.html#autotoc_md1069", null ],
          [ "Example", "jsonrpc.html#autotoc_md1070", null ]
        ] ],
        [ "bdev_rbd_resize", "jsonrpc.html#rpc_bdev_rbd_resize", [
          [ "Parameters", "jsonrpc.html#autotoc_md1071", null ],
          [ "Response", "jsonrpc.html#autotoc_md1072", null ],
          [ "Example", "jsonrpc.html#autotoc_md1073", null ]
        ] ],
        [ "bdev_delay_create", "jsonrpc.html#rpc_bdev_delay_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md1074", null ],
          [ "Response", "jsonrpc.html#autotoc_md1075", null ],
          [ "Example", "jsonrpc.html#autotoc_md1076", null ]
        ] ],
        [ "bdev_delay_delete", "jsonrpc.html#rpc_bdev_delay_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md1077", null ],
          [ "Example", "jsonrpc.html#autotoc_md1078", null ]
        ] ],
        [ "bdev_delay_update_latency", "jsonrpc.html#rpc_bdev_delay_update_latency", [
          [ "Parameters", "jsonrpc.html#autotoc_md1079", null ],
          [ "Response", "jsonrpc.html#autotoc_md1080", null ],
          [ "Example", "jsonrpc.html#autotoc_md1081", null ]
        ] ],
        [ "bdev_error_create", "jsonrpc.html#rpc_bdev_error_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md1082", null ],
          [ "Example", "jsonrpc.html#autotoc_md1083", null ]
        ] ],
        [ "bdev_error_delete", "jsonrpc.html#rpc_bdev_error_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md1084", null ],
          [ "Response", "jsonrpc.html#autotoc_md1085", null ],
          [ "Example", "jsonrpc.html#autotoc_md1086", null ]
        ] ],
        [ "bdev_error_inject_error", "jsonrpc.html#rpc_bdev_error_inject_error", [
          [ "Parameters", "jsonrpc.html#autotoc_md1087", null ],
          [ "Example", "jsonrpc.html#autotoc_md1088", null ]
        ] ],
        [ "bdev_iscsi_set_options", "jsonrpc.html#rpc_bdev_iscsi_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md1089", null ],
          [ "Example", "jsonrpc.html#autotoc_md1090", null ]
        ] ],
        [ "bdev_iscsi_create", "jsonrpc.html#rpc_bdev_iscsi_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md1091", null ],
          [ "Response", "jsonrpc.html#autotoc_md1092", null ],
          [ "Example", "jsonrpc.html#autotoc_md1093", null ]
        ] ],
        [ "bdev_iscsi_delete", "jsonrpc.html#rpc_bdev_iscsi_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md1094", null ],
          [ "Example", "jsonrpc.html#autotoc_md1095", null ]
        ] ],
        [ "bdev_ftl_create", "jsonrpc.html#rpc_bdev_ftl_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md1096", null ],
          [ "Response", "jsonrpc.html#autotoc_md1097", null ],
          [ "Example", "jsonrpc.html#autotoc_md1098", null ]
        ] ],
        [ "bdev_ftl_delete", "jsonrpc.html#rpc_bdev_ftl_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md1099", null ],
          [ "Example", "jsonrpc.html#autotoc_md1100", null ]
        ] ],
        [ "bdev_ftl_unmap", "jsonrpc.html#rpc_bdev_ftl_unmap", [
          [ "Parameters", "jsonrpc.html#autotoc_md1101", null ],
          [ "Example", "jsonrpc.html#autotoc_md1102", null ]
        ] ],
        [ "bdev_ftl_get_stats", "jsonrpc.html#rpc_bdev_ftl_get_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md1103", null ],
          [ "Response", "jsonrpc.html#autotoc_md1104", null ],
          [ "Example", "jsonrpc.html#autotoc_md1105", null ]
        ] ],
        [ "bdev_ftl_get_properties", "jsonrpc.html#rpc_bdev_ftl_get_properties", [
          [ "Parameters", "jsonrpc.html#autotoc_md1106", null ],
          [ "Response", "jsonrpc.html#autotoc_md1107", null ],
          [ "Example", "jsonrpc.html#autotoc_md1108", null ]
        ] ],
        [ "bdev_ftl_set_property", "jsonrpc.html#rpc_bdev_ftl_set_property", [
          [ "Parameters", "jsonrpc.html#autotoc_md1109", null ],
          [ "Example", "jsonrpc.html#autotoc_md1110", null ]
        ] ],
        [ "bdev_passthru_create", "jsonrpc.html#rpc_bdev_passthru_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md1111", null ],
          [ "Response", "jsonrpc.html#autotoc_md1112", null ],
          [ "Example", "jsonrpc.html#autotoc_md1113", null ]
        ] ],
        [ "bdev_passthru_delete", "jsonrpc.html#rpc_bdev_passthru_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md1114", null ],
          [ "Example", "jsonrpc.html#autotoc_md1115", null ]
        ] ],
        [ "bdev_xnvme_create", "jsonrpc.html#rpc_bdev_xnvme_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md1116", null ],
          [ "Response", "jsonrpc.html#autotoc_md1117", null ],
          [ "Example", "jsonrpc.html#autotoc_md1118", null ]
        ] ],
        [ "bdev_xnvme_delete", "jsonrpc.html#rpc_bdev_xnvme_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md1119", null ],
          [ "Example", "jsonrpc.html#autotoc_md1120", null ]
        ] ],
        [ "bdev_virtio_attach_controller", "jsonrpc.html#rpc_bdev_virtio_attach_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md1121", null ],
          [ "Response", "jsonrpc.html#autotoc_md1122", null ],
          [ "Example", "jsonrpc.html#autotoc_md1123", null ]
        ] ],
        [ "bdev_virtio_scsi_get_devices", "jsonrpc.html#rpc_bdev_virtio_scsi_get_devices", [
          [ "Parameters", "jsonrpc.html#autotoc_md1124", null ],
          [ "Response", "jsonrpc.html#autotoc_md1125", null ],
          [ "Example", "jsonrpc.html#autotoc_md1126", null ]
        ] ],
        [ "bdev_virtio_detach_controller", "jsonrpc.html#rpc_bdev_virtio_detach_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md1127", null ],
          [ "Example", "jsonrpc.html#autotoc_md1128", null ]
        ] ],
        [ "bdev_virtio_blk_set_hotplug", "jsonrpc.html#rpc_bdev_virtio_blk_set_hotplug", [
          [ "Parameters", "jsonrpc.html#autotoc_md1129", null ],
          [ "Response", "jsonrpc.html#autotoc_md1130", null ],
          [ "Example", "jsonrpc.html#autotoc_md1131", null ]
        ] ]
      ] ],
      [ "iSCSI Target", "jsonrpc.html#jsonrpc_components_iscsi_tgt", [
        [ "iscsi_set_options", "jsonrpc.html#rpc_iscsi_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md1132", null ],
          [ "Example", "jsonrpc.html#autotoc_md1133", null ]
        ] ],
        [ "iscsi_get_options", "jsonrpc.html#rpc_iscsi_get_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md1134", null ],
          [ "Example", "jsonrpc.html#autotoc_md1135", null ]
        ] ],
        [ "scsi_get_devices", "jsonrpc.html#rpc_scsi_get_devices", [
          [ "Parameters", "jsonrpc.html#autotoc_md1136", null ],
          [ "Example", "jsonrpc.html#autotoc_md1137", null ]
        ] ],
        [ "iscsi_set_discovery_auth", "jsonrpc.html#rpc_iscsi_set_discovery_auth", [
          [ "Parameters", "jsonrpc.html#autotoc_md1138", null ],
          [ "Example", "jsonrpc.html#autotoc_md1139", null ]
        ] ],
        [ "iscsi_create_auth_group", "jsonrpc.html#rpc_iscsi_create_auth_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md1140", [
            [ "secret", "jsonrpc.html#rpc_iscsi_create_auth_group_secret", null ]
          ] ],
          [ "Example", "jsonrpc.html#autotoc_md1141", null ]
        ] ],
        [ "iscsi_delete_auth_group", "jsonrpc.html#rpc_iscsi_delete_auth_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md1142", null ],
          [ "Example", "jsonrpc.html#autotoc_md1143", null ]
        ] ],
        [ "iscsi_get_auth_groups", "jsonrpc.html#rpc_iscsi_get_auth_groups", [
          [ "Parameters", "jsonrpc.html#autotoc_md1144", null ],
          [ "Response", "jsonrpc.html#autotoc_md1145", null ],
          [ "Example", "jsonrpc.html#autotoc_md1146", null ]
        ] ],
        [ "iscsi_auth_group_add_secret", "jsonrpc.html#rpc_iscsi_auth_group_add_secret", [
          [ "Parameters", "jsonrpc.html#autotoc_md1147", null ],
          [ "Example", "jsonrpc.html#autotoc_md1148", null ]
        ] ],
        [ "iscsi_auth_group_remove_secret", "jsonrpc.html#rpc_iscsi_auth_group_remove_secret", [
          [ "Parameters", "jsonrpc.html#autotoc_md1149", null ],
          [ "Example", "jsonrpc.html#autotoc_md1150", null ]
        ] ],
        [ "iscsi_get_initiator_groups", "jsonrpc.html#rpc_iscsi_get_initiator_groups", [
          [ "Parameters", "jsonrpc.html#autotoc_md1151", null ],
          [ "Response", "jsonrpc.html#autotoc_md1152", null ],
          [ "Example", "jsonrpc.html#autotoc_md1153", null ]
        ] ],
        [ "iscsi_create_initiator_group", "jsonrpc.html#rpc_iscsi_create_initiator_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md1154", null ],
          [ "Example", "jsonrpc.html#autotoc_md1155", null ]
        ] ],
        [ "iscsi_delete_initiator_group", "jsonrpc.html#rpc_iscsi_delete_initiator_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md1156", null ],
          [ "Example", "jsonrpc.html#autotoc_md1157", null ]
        ] ],
        [ "iscsi_initiator_group_add_initiators", "jsonrpc.html#rpc_iscsi_initiator_group_add_initiators", [
          [ "Parameters", "jsonrpc.html#autotoc_md1158", null ],
          [ "Example", "jsonrpc.html#autotoc_md1159", null ]
        ] ],
        [ "iscsi_initiator_group_remove_initiators", "jsonrpc.html#rpc_iscsi_initiator_group_remove_initiators", [
          [ "Parameters", "jsonrpc.html#autotoc_md1160", null ],
          [ "Example", "jsonrpc.html#autotoc_md1161", null ]
        ] ],
        [ "iscsi_get_target_nodes", "jsonrpc.html#rpc_iscsi_get_target_nodes", [
          [ "Parameters", "jsonrpc.html#autotoc_md1162", null ],
          [ "Response", "jsonrpc.html#autotoc_md1163", null ],
          [ "Example", "jsonrpc.html#autotoc_md1164", null ]
        ] ],
        [ "iscsi_create_target_node", "jsonrpc.html#rpc_iscsi_create_target_node", [
          [ "Parameters", "jsonrpc.html#autotoc_md1165", null ],
          [ "Example", "jsonrpc.html#autotoc_md1166", null ]
        ] ],
        [ "iscsi_target_node_set_auth", "jsonrpc.html#rpc_iscsi_target_node_set_auth", [
          [ "Parameters", "jsonrpc.html#autotoc_md1167", null ],
          [ "Example", "jsonrpc.html#autotoc_md1168", null ]
        ] ],
        [ "iscsi_target_node_add_pg_ig_maps", "jsonrpc.html#rpc_iscsi_target_node_add_pg_ig_maps", [
          [ "Parameters", "jsonrpc.html#autotoc_md1169", [
            [ "Portal to Initiator group mappings object", "jsonrpc.html#autotoc_md1170", null ]
          ] ],
          [ "Example", "jsonrpc.html#autotoc_md1171", null ]
        ] ],
        [ "iscsi_target_node_remove_pg_ig_maps", "jsonrpc.html#rpc_iscsi_target_node_remove_pg_ig_maps", [
          [ "Parameters", "jsonrpc.html#autotoc_md1172", [
            [ "Portal to Initiator group mappings object", "jsonrpc.html#autotoc_md1173", null ]
          ] ],
          [ "Example", "jsonrpc.html#autotoc_md1174", null ]
        ] ],
        [ "iscsi_delete_target_node", "jsonrpc.html#rpc_iscsi_delete_target_node", [
          [ "Parameters", "jsonrpc.html#autotoc_md1175", null ],
          [ "Example", "jsonrpc.html#autotoc_md1176", null ]
        ] ],
        [ "iscsi_get_portal_groups", "jsonrpc.html#rpc_iscsi_get_portal_groups", [
          [ "Parameters", "jsonrpc.html#autotoc_md1177", null ],
          [ "Example", "jsonrpc.html#autotoc_md1178", null ]
        ] ],
        [ "iscsi_create_portal_group", "jsonrpc.html#rpc_iscsi_create_portal_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md1179", [
            [ "Portal object", "jsonrpc.html#autotoc_md1180", null ]
          ] ],
          [ "Example", "jsonrpc.html#autotoc_md1181", null ]
        ] ],
        [ "iscsi_start_portal_group", "jsonrpc.html#rpc_iscsi_start_portal_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md1182", null ],
          [ "Example", "jsonrpc.html#autotoc_md1183", null ]
        ] ],
        [ "iscsi_delete_portal_group", "jsonrpc.html#rpc_iscsi_delete_portal_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md1184", null ],
          [ "Example", "jsonrpc.html#autotoc_md1185", null ]
        ] ],
        [ "iscsi_portal_group_set_auth", "jsonrpc.html#rpc_iscsi_portal_group_set_auth", [
          [ "Parameters", "jsonrpc.html#autotoc_md1186", null ],
          [ "Example", "jsonrpc.html#autotoc_md1187", null ]
        ] ],
        [ "iscsi_get_connections", "jsonrpc.html#rpc_iscsi_get_connections", [
          [ "Parameters", "jsonrpc.html#autotoc_md1188", null ],
          [ "Response", "jsonrpc.html#autotoc_md1189", null ],
          [ "Example", "jsonrpc.html#autotoc_md1190", null ]
        ] ],
        [ "iscsi_get_stats", "jsonrpc.html#rpc_iscsi_get_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md1191", null ],
          [ "Response", "jsonrpc.html#autotoc_md1192", null ],
          [ "Example", "jsonrpc.html#autotoc_md1193", null ]
        ] ],
        [ "iscsi_target_node_add_lun", "jsonrpc.html#rpc_iscsi_target_node_add_lun", [
          [ "Parameters", "jsonrpc.html#autotoc_md1194", null ],
          [ "Example", "jsonrpc.html#autotoc_md1195", null ]
        ] ],
        [ "iscsi_target_node_set_redirect", "jsonrpc.html#rpc_iscsi_target_node_set_redirect", [
          [ "Parameters", "jsonrpc.html#autotoc_md1196", null ],
          [ "Example", "jsonrpc.html#autotoc_md1197", null ]
        ] ],
        [ "iscsi_target_node_request_logout", "jsonrpc.html#rpc_iscsi_target_node_request_logout", [
          [ "Parameters", "jsonrpc.html#autotoc_md1198", null ],
          [ "Example", "jsonrpc.html#autotoc_md1199", null ]
        ] ],
        [ "iscsi_enable_histogram", "jsonrpc.html#rpc_iscsi_enable_histogram", [
          [ "Parameters", "jsonrpc.html#autotoc_md1200", null ],
          [ "Example", "jsonrpc.html#autotoc_md1201", null ]
        ] ],
        [ "iscsi_get_histogram", "jsonrpc.html#rpc_iscsi_get_histogram", [
          [ "Parameters", "jsonrpc.html#autotoc_md1202", null ],
          [ "Response", "jsonrpc.html#autotoc_md1203", null ],
          [ "Example", "jsonrpc.html#autotoc_md1204", null ]
        ] ]
      ] ],
      [ "NVMe-oF Target", "jsonrpc.html#jsonrpc_components_nvmf_tgt", [
        [ "nvmf_create_transport", "jsonrpc.html#rpc_nvmf_create_transport", [
          [ "Parameters", "jsonrpc.html#autotoc_md1205", null ],
          [ "Example", "jsonrpc.html#autotoc_md1206", null ]
        ] ],
        [ "nvmf_get_subsystems", "jsonrpc.html#rpc_nvmf_get_subsystems", [
          [ "Parameters", "jsonrpc.html#autotoc_md1207", null ],
          [ "Example", "jsonrpc.html#autotoc_md1208", null ]
        ] ],
        [ "nvmf_create_subsystem", "jsonrpc.html#rpc_nvmf_create_subsystem", [
          [ "Parameters", "jsonrpc.html#autotoc_md1209", null ],
          [ "Example", "jsonrpc.html#autotoc_md1210", null ]
        ] ],
        [ "nvmf_delete_subsystem", "jsonrpc.html#rpc_nvmf_delete_subsystem", [
          [ "Parameters", "jsonrpc.html#autotoc_md1211", null ],
          [ "Example", "jsonrpc.html#autotoc_md1212", null ]
        ] ],
        [ "nvmf_subsystem_add_listener", "jsonrpc.html#rpc_nvmf_subsystem_add_listener", [
          [ "Parameters", "jsonrpc.html#autotoc_md1213", [
            [ "listen_address", "jsonrpc.html#rpc_nvmf_listen_address", null ]
          ] ],
          [ "Example", "jsonrpc.html#autotoc_md1214", null ]
        ] ],
        [ "nvmf_subsystem_remove_listener", "jsonrpc.html#rpc_nvmf_subsystem_remove_listener", [
          [ "Parameters", "jsonrpc.html#autotoc_md1215", null ],
          [ "Example", "jsonrpc.html#autotoc_md1216", null ]
        ] ],
        [ "nvmf_subsystem_listener_set_ana_state", "jsonrpc.html#rpc_nvmf_subsystem_listener_set_ana_state", [
          [ "Parameters", "jsonrpc.html#autotoc_md1217", null ],
          [ "Example", "jsonrpc.html#autotoc_md1218", null ]
        ] ],
        [ "nvmf_subsystem_add_ns", "jsonrpc.html#rpc_nvmf_subsystem_add_ns", [
          [ "Parameters", "jsonrpc.html#autotoc_md1219", [
            [ "namespace", "jsonrpc.html#rpc_nvmf_namespace", null ]
          ] ],
          [ "Example", "jsonrpc.html#autotoc_md1220", null ]
        ] ],
        [ "nvmf_subsystem_remove_ns", "jsonrpc.html#rpc_nvmf_subsystem_remove_ns", [
          [ "Parameters", "jsonrpc.html#autotoc_md1221", null ],
          [ "Example", "jsonrpc.html#autotoc_md1222", null ]
        ] ],
        [ "nvmf_subsystem_set_ns_ana_group", "jsonrpc.html#rpc_nvmf_subsystem_set_ns_ana_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md1223", null ],
          [ "Example", "jsonrpc.html#autotoc_md1224", null ]
        ] ],
        [ "nvmf_subsystem_add_host", "jsonrpc.html#rpc_nvmf_subsystem_add_host", [
          [ "Parameters", "jsonrpc.html#autotoc_md1225", null ],
          [ "Example", "jsonrpc.html#autotoc_md1226", null ]
        ] ],
        [ "nvmf_subsystem_remove_host", "jsonrpc.html#rpc_nvmf_subsystem_remove_host", [
          [ "Parameters", "jsonrpc.html#autotoc_md1227", null ],
          [ "Example", "jsonrpc.html#autotoc_md1228", null ]
        ] ],
        [ "nvmf_subsystem_allow_any_host", "jsonrpc.html#rpc_nvmf_subsystem_allow_any_host", [
          [ "Parameters", "jsonrpc.html#autotoc_md1229", null ],
          [ "Example", "jsonrpc.html#autotoc_md1230", null ]
        ] ],
        [ "nvmf_subsystem_set_keys", "jsonrpc.html#rpc_nvmf_subsystem_set_keys", [
          [ "Parameters", "jsonrpc.html#autotoc_md1231", null ],
          [ "Example", "jsonrpc.html#autotoc_md1232", null ]
        ] ],
        [ "nvmf_subsystem_get_controllers", "jsonrpc.html#rpc_nvmf_subsystem_get_controllers", [
          [ "Parameters", "jsonrpc.html#autotoc_md1233", null ],
          [ "Example", "jsonrpc.html#autotoc_md1234", null ]
        ] ],
        [ "nvmf_subsystem_get_qpairs", "jsonrpc.html#rpc_nvmf_subsystem_get_qpairs", [
          [ "Parameters", "jsonrpc.html#autotoc_md1235", null ],
          [ "Example", "jsonrpc.html#autotoc_md1236", null ]
        ] ],
        [ "nvmf_subsystem_get_listeners", "jsonrpc.html#rpc_nvmf_subsystem_get_listeners", [
          [ "Parameters", "jsonrpc.html#autotoc_md1237", null ],
          [ "Example", "jsonrpc.html#autotoc_md1238", null ]
        ] ],
        [ "nvmf_ns_add_host", "jsonrpc.html#rpc_nvmf_ns_add_host", [
          [ "Parameters", "jsonrpc.html#autotoc_md1239", null ],
          [ "Example", "jsonrpc.html#autotoc_md1240", null ]
        ] ],
        [ "nvmf_ns_remove_host", "jsonrpc.html#rpc_nvmf_ns_remove_host", [
          [ "Parameters", "jsonrpc.html#autotoc_md1241", null ],
          [ "Example", "jsonrpc.html#autotoc_md1242", null ]
        ] ],
        [ "nvmf_set_max_subsystems", "jsonrpc.html#rpc_nvmf_set_max_subsystems", [
          [ "Parameters", "jsonrpc.html#autotoc_md1243", null ],
          [ "Example", "jsonrpc.html#autotoc_md1244", null ]
        ] ],
        [ "nvmf_discovery_add_referral", "jsonrpc.html#rpc_nvmf_discovery_add_referral", [
          [ "Parameters", "jsonrpc.html#autotoc_md1245", null ],
          [ "Example", "jsonrpc.html#autotoc_md1246", null ]
        ] ],
        [ "nvmf_discovery_remove_referral", "jsonrpc.html#rpc_nvmf_discovery_remove_referral", [
          [ "Parameters", "jsonrpc.html#autotoc_md1247", null ],
          [ "Example", "jsonrpc.html#autotoc_md1248", null ]
        ] ],
        [ "nvmf_discovery_get_referrals", "jsonrpc.html#rpc_nvmf_discovery_get_referrals", [
          [ "Parameters", "jsonrpc.html#autotoc_md1249", null ],
          [ "Example", "jsonrpc.html#autotoc_md1250", null ]
        ] ],
        [ "nvmf_set_config", "jsonrpc.html#rpc_nvmf_set_config", [
          [ "Parameters", "jsonrpc.html#autotoc_md1251", [
            [ "admin_cmd_passthru", "jsonrpc.html#spdk_nvmf_admin_passthru_conf", null ]
          ] ],
          [ "Example", "jsonrpc.html#autotoc_md1252", null ]
        ] ],
        [ "nvmf_get_transports", "jsonrpc.html#rpc_nvmf_get_transports", [
          [ "Parameters", "jsonrpc.html#autotoc_md1253", null ],
          [ "Example", "jsonrpc.html#autotoc_md1254", null ]
        ] ],
        [ "nvmf_get_stats", "jsonrpc.html#rpc_nvmf_get_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md1255", null ],
          [ "Response", "jsonrpc.html#autotoc_md1256", null ],
          [ "Example", "jsonrpc.html#autotoc_md1257", null ]
        ] ],
        [ "nvmf_set_crdt", "jsonrpc.html#rpc_nvmf_set_crdt", [
          [ "Parameters", "jsonrpc.html#autotoc_md1258", null ]
        ] ]
      ] ],
      [ "Vfio-user Target", "jsonrpc.html#jsonrpc_components_vfu_tgt", [
        [ "vfu_tgt_set_base_path", "jsonrpc.html#rpc_vfu_tgt_set_base_path", [
          [ "Parameters", "jsonrpc.html#autotoc_md1259", null ],
          [ "Example", "jsonrpc.html#autotoc_md1260", null ]
        ] ],
        [ "vfu_virtio_delete_endpoint", "jsonrpc.html#rpc_vfu_virtio_delete_endpoint", [
          [ "Parameters", "jsonrpc.html#autotoc_md1261", null ],
          [ "Example", "jsonrpc.html#autotoc_md1262", null ]
        ] ],
        [ "vfu_virtio_create_blk_endpoint", "jsonrpc.html#rpc_vfu_virtio_create_blk_endpoint", [
          [ "Parameters", "jsonrpc.html#autotoc_md1263", null ],
          [ "Example", "jsonrpc.html#autotoc_md1264", null ]
        ] ],
        [ "vfu_virtio_scsi_add_target", "jsonrpc.html#rpc_vfu_virtio_scsi_add_target", [
          [ "Parameters", "jsonrpc.html#autotoc_md1265", null ],
          [ "Example", "jsonrpc.html#autotoc_md1266", null ]
        ] ],
        [ "vfu_virtio_scsi_remove_target", "jsonrpc.html#rpc_vfu_virtio_scsi_remove_target", [
          [ "Parameters", "jsonrpc.html#autotoc_md1267", null ],
          [ "Example", "jsonrpc.html#autotoc_md1268", null ]
        ] ],
        [ "vfu_virtio_create_scsi_endpoint", "jsonrpc.html#rpc_vfu_virtio_create_scsi_endpoint", [
          [ "Parameters", "jsonrpc.html#autotoc_md1269", null ],
          [ "Example", "jsonrpc.html#autotoc_md1270", null ]
        ] ],
        [ "vfu_virtio_create_fs_endpoint", "jsonrpc.html#rpc_vfu_virtio_create_fs_endpoint", [
          [ "Parameters", "jsonrpc.html#autotoc_md1271", null ],
          [ "Example", "jsonrpc.html#autotoc_md1272", null ]
        ] ]
      ] ],
      [ "Vhost Target", "jsonrpc.html#jsonrpc_components_vhost_tgt", [
        [ "vhost_controller_set_coalescing", "jsonrpc.html#rpc_vhost_controller_set_coalescing", [
          [ "Parameters", "jsonrpc.html#autotoc_md1273", null ],
          [ "Example", "jsonrpc.html#autotoc_md1274", null ]
        ] ],
        [ "vhost_create_scsi_controller", "jsonrpc.html#rpc_vhost_create_scsi_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md1275", null ],
          [ "Example", "jsonrpc.html#autotoc_md1276", null ]
        ] ],
        [ "vhost_start_scsi_controller", "jsonrpc.html#rpc_vhost_start_scsi_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md1277", null ],
          [ "Example", "jsonrpc.html#autotoc_md1278", null ]
        ] ],
        [ "vhost_scsi_controller_add_target", "jsonrpc.html#rpc_vhost_scsi_controller_add_target", [
          [ "Parameters", "jsonrpc.html#autotoc_md1279", null ],
          [ "Response", "jsonrpc.html#autotoc_md1280", null ],
          [ "Example", "jsonrpc.html#autotoc_md1281", null ]
        ] ],
        [ "vhost_scsi_controller_remove_target", "jsonrpc.html#rpc_vhost_scsi_controller_remove_target", [
          [ "Parameters", "jsonrpc.html#autotoc_md1282", null ],
          [ "Example", "jsonrpc.html#autotoc_md1283", null ]
        ] ],
        [ "virtio_blk_create_transport", "jsonrpc.html#rpc_virtio_blk_create_transport", [
          [ "Parameters", "jsonrpc.html#autotoc_md1284", null ],
          [ "Example", "jsonrpc.html#autotoc_md1285", null ]
        ] ],
        [ "virtio_blk_get_transports", "jsonrpc.html#rpc_virtio_blk_get_transports", [
          [ "Parameters", "jsonrpc.html#autotoc_md1286", null ],
          [ "Example", "jsonrpc.html#autotoc_md1287", null ]
        ] ],
        [ "vhost_create_blk_controller", "jsonrpc.html#rpc_vhost_create_blk_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md1288", null ],
          [ "Example", "jsonrpc.html#autotoc_md1289", null ]
        ] ],
        [ "vhost_get_controllers", "jsonrpc.html#rpc_vhost_get_controllers", [
          [ "Parameters", "jsonrpc.html#autotoc_md1290", null ],
          [ "Response", "jsonrpc.html#autotoc_md1291", [
            [ "Vhost block", "jsonrpc.html#rpc_vhost_get_controllers_blk", null ],
            [ "Vhost SCSI", "jsonrpc.html#rpc_vhost_get_controllers_scsi", null ],
            [ "Vhost SCSI LUN", "jsonrpc.html#rpc_vhost_get_controllers_scsi_luns", null ]
          ] ],
          [ "Example", "jsonrpc.html#autotoc_md1292", null ]
        ] ],
        [ "vhost_delete_controller", "jsonrpc.html#rpc_vhost_delete_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md1293", null ],
          [ "Example", "jsonrpc.html#autotoc_md1294", null ]
        ] ]
      ] ],
      [ "Logical Volume", "jsonrpc.html#jsonrpc_components_lvol", [
        [ "bdev_lvol_create_lvstore", "jsonrpc.html#rpc_bdev_lvol_create_lvstore", [
          [ "Parameters", "jsonrpc.html#autotoc_md1295", null ],
          [ "Response", "jsonrpc.html#autotoc_md1296", null ],
          [ "Example", "jsonrpc.html#autotoc_md1297", null ]
        ] ],
        [ "bdev_lvol_delete_lvstore", "jsonrpc.html#rpc_bdev_lvol_delete_lvstore", [
          [ "Parameters", "jsonrpc.html#autotoc_md1298", null ],
          [ "Example", "jsonrpc.html#autotoc_md1299", null ]
        ] ],
        [ "bdev_lvol_get_lvstores", "jsonrpc.html#rpc_bdev_lvol_get_lvstores", [
          [ "Parameters", "jsonrpc.html#autotoc_md1300", null ],
          [ "Example", "jsonrpc.html#autotoc_md1301", null ]
        ] ],
        [ "bdev_lvol_rename_lvstore", "jsonrpc.html#rpc_bdev_lvol_rename_lvstore", [
          [ "Parameters", "jsonrpc.html#autotoc_md1302", null ],
          [ "Example", "jsonrpc.html#autotoc_md1303", null ]
        ] ],
        [ "bdev_lvol_grow_lvstore", "jsonrpc.html#rpc_bdev_lvol_grow_lvstore", [
          [ "Parameters", "jsonrpc.html#autotoc_md1304", null ],
          [ "Example", "jsonrpc.html#autotoc_md1305", null ]
        ] ],
        [ "bdev_lvol_create", "jsonrpc.html#rpc_bdev_lvol_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md1306", null ],
          [ "Response", "jsonrpc.html#autotoc_md1307", null ],
          [ "Example", "jsonrpc.html#autotoc_md1308", null ]
        ] ],
        [ "bdev_lvol_snapshot", "jsonrpc.html#rpc_bdev_lvol_snapshot", [
          [ "Parameters", "jsonrpc.html#autotoc_md1309", null ],
          [ "Response", "jsonrpc.html#autotoc_md1310", null ],
          [ "Example", "jsonrpc.html#autotoc_md1311", null ]
        ] ],
        [ "bdev_lvol_clone", "jsonrpc.html#rpc_bdev_lvol_clone", [
          [ "Parameters", "jsonrpc.html#autotoc_md1312", null ],
          [ "Response", "jsonrpc.html#autotoc_md1313", null ],
          [ "Example", "jsonrpc.html#autotoc_md1314", null ]
        ] ],
        [ "bdev_lvol_clone_bdev", "jsonrpc.html#rpc_bdev_lvol_clone_bdev", [
          [ "Parameters", "jsonrpc.html#autotoc_md1315", null ],
          [ "Response", "jsonrpc.html#autotoc_md1316", null ],
          [ "Example", "jsonrpc.html#autotoc_md1317", null ]
        ] ],
        [ "bdev_lvol_rename", "jsonrpc.html#rpc_bdev_lvol_rename", [
          [ "Parameters", "jsonrpc.html#autotoc_md1318", null ],
          [ "Example", "jsonrpc.html#autotoc_md1319", null ]
        ] ],
        [ "bdev_lvol_resize", "jsonrpc.html#rpc_bdev_lvol_resize", [
          [ "Parameters", "jsonrpc.html#autotoc_md1320", null ],
          [ "Example", "jsonrpc.html#autotoc_md1321", null ]
        ] ],
        [ "bdev_lvol_set_read_only", "jsonrpc.html#rpc_bdev_lvol_set_read_only", [
          [ "Parameters", "jsonrpc.html#autotoc_md1322", null ],
          [ "Example", "jsonrpc.html#autotoc_md1323", null ]
        ] ],
        [ "bdev_lvol_delete", "jsonrpc.html#rpc_bdev_lvol_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md1324", null ],
          [ "Example", "jsonrpc.html#autotoc_md1325", null ]
        ] ],
        [ "bdev_lvol_inflate", "jsonrpc.html#rpc_bdev_lvol_inflate", [
          [ "Parameters", "jsonrpc.html#autotoc_md1326", null ],
          [ "Example", "jsonrpc.html#autotoc_md1327", null ]
        ] ],
        [ "bdev_lvol_decouple_parent", "jsonrpc.html#rpc_bdev_lvol_decouple_parent", [
          [ "Parameters", "jsonrpc.html#autotoc_md1328", null ],
          [ "Example", "jsonrpc.html#autotoc_md1329", null ]
        ] ],
        [ "bdev_lvol_get_lvols", "jsonrpc.html#rpc_bdev_lvol_get_lvols", [
          [ "Parameters", "jsonrpc.html#autotoc_md1330", null ],
          [ "Example", "jsonrpc.html#autotoc_md1331", null ]
        ] ],
        [ "bdev_lvol_set_parent", "jsonrpc.html#rpc_bdev_lvol_set_parent", [
          [ "Parameters", "jsonrpc.html#autotoc_md1332", null ],
          [ "Example", "jsonrpc.html#autotoc_md1333", null ]
        ] ],
        [ "bdev_lvol_set_parent_bdev", "jsonrpc.html#rpc_bdev_lvol_set_parent_bdev", [
          [ "Parameters", "jsonrpc.html#autotoc_md1334", null ],
          [ "Example", "jsonrpc.html#autotoc_md1335", null ]
        ] ],
        [ "bdev_lvol_start_shallow_copy", "jsonrpc.html#rpc_bdev_lvol_start_shallow_copy", [
          [ "Parameters", "jsonrpc.html#autotoc_md1336", null ],
          [ "Response", "jsonrpc.html#autotoc_md1337", null ],
          [ "Example", "jsonrpc.html#autotoc_md1338", null ]
        ] ],
        [ "bdev_lvol_check_shallow_copy", "jsonrpc.html#rpc_bdev_lvol_check_shallow_copy", [
          [ "Parameters", "jsonrpc.html#autotoc_md1339", null ],
          [ "Response", "jsonrpc.html#autotoc_md1340", null ],
          [ "Example", "jsonrpc.html#autotoc_md1341", null ]
        ] ]
      ] ],
      [ "RAID", "jsonrpc.html#jsonrpc_components_raid", [
        [ "bdev_raid_set_options", "jsonrpc.html#rpc_bdev_raid_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md1342", null ],
          [ "Example", "jsonrpc.html#autotoc_md1343", null ]
        ] ],
        [ "bdev_raid_get_bdevs", "jsonrpc.html#rpc_bdev_raid_get_bdevs", [
          [ "Parameters", "jsonrpc.html#autotoc_md1344", null ],
          [ "Example", "jsonrpc.html#autotoc_md1345", null ]
        ] ],
        [ "bdev_raid_create", "jsonrpc.html#rpc_bdev_raid_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md1346", null ],
          [ "Example", "jsonrpc.html#autotoc_md1347", null ]
        ] ],
        [ "bdev_raid_delete", "jsonrpc.html#rpc_bdev_raid_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md1348", null ],
          [ "Example", "jsonrpc.html#autotoc_md1349", null ]
        ] ],
        [ "bdev_raid_add_base_bdev", "jsonrpc.html#rpc_bdev_raid_add_base_bdev", [
          [ "Parameters", "jsonrpc.html#autotoc_md1350", null ],
          [ "Example", "jsonrpc.html#autotoc_md1351", null ]
        ] ],
        [ "bdev_raid_remove_base_bdev", "jsonrpc.html#rpc_bdev_raid_remove_base_bdev", [
          [ "Parameters", "jsonrpc.html#autotoc_md1352", null ],
          [ "Example", "jsonrpc.html#autotoc_md1353", null ]
        ] ]
      ] ],
      [ "SPLIT", "jsonrpc.html#jsonrpc_components_split", [
        [ "bdev_split_create", "jsonrpc.html#rpc_bdev_split_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md1354", null ],
          [ "Example", "jsonrpc.html#autotoc_md1355", null ]
        ] ],
        [ "bdev_split_delete", "jsonrpc.html#rpc_bdev_split_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md1356", null ],
          [ "Example", "jsonrpc.html#autotoc_md1357", null ]
        ] ]
      ] ],
      [ "Uring", "jsonrpc.html#jsonrpc_components_uring", [
        [ "bdev_uring_create", "jsonrpc.html#rpc_bdev_uring_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md1358", null ],
          [ "Example", "jsonrpc.html#autotoc_md1359", null ]
        ] ],
        [ "bdev_uring_rescan", "jsonrpc.html#rpc_bdev_uring_rescan", [
          [ "Parameters", "jsonrpc.html#autotoc_md1360", null ],
          [ "Example", "jsonrpc.html#autotoc_md1361", null ]
        ] ],
        [ "bdev_uring_delete", "jsonrpc.html#rpc_bdev_uring_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md1362", null ],
          [ "Example", "jsonrpc.html#autotoc_md1363", null ]
        ] ]
      ] ],
      [ "OPAL", "jsonrpc.html#jsonrpc_components_opal", [
        [ "bdev_nvme_opal_init", "jsonrpc.html#rpc_bdev_nvme_opal_init", [
          [ "Parameters", "jsonrpc.html#autotoc_md1364", null ],
          [ "Example", "jsonrpc.html#autotoc_md1365", null ]
        ] ],
        [ "bdev_nvme_opal_revert", "jsonrpc.html#rpc_bdev_nvme_opal_revert", [
          [ "Parameters", "jsonrpc.html#autotoc_md1366", null ],
          [ "Example", "jsonrpc.html#autotoc_md1367", null ]
        ] ],
        [ "bdev_opal_create", "jsonrpc.html#rpc_bdev_opal_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md1368", null ],
          [ "Response", "jsonrpc.html#autotoc_md1369", null ],
          [ "Example", "jsonrpc.html#autotoc_md1370", null ]
        ] ],
        [ "bdev_opal_get_info", "jsonrpc.html#rpc_bdev_opal_get_info", [
          [ "Parameters", "jsonrpc.html#autotoc_md1371", null ],
          [ "Response", "jsonrpc.html#autotoc_md1372", null ],
          [ "Example", "jsonrpc.html#autotoc_md1373", null ]
        ] ],
        [ "bdev_opal_delete", "jsonrpc.html#rpc_bdev_opal_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md1374", null ],
          [ "Example", "jsonrpc.html#autotoc_md1375", null ]
        ] ],
        [ "bdev_opal_new_user", "jsonrpc.html#rpc_bdev_opal_new_user", [
          [ "Parameters", "jsonrpc.html#autotoc_md1376", null ],
          [ "Example", "jsonrpc.html#autotoc_md1377", null ]
        ] ],
        [ "bdev_opal_set_lock_state", "jsonrpc.html#rpc_bdev_opal_set_lock_state", [
          [ "Parameters", "jsonrpc.html#autotoc_md1378", null ],
          [ "Example", "jsonrpc.html#autotoc_md1379", null ]
        ] ]
      ] ],
      [ "Notifications", "jsonrpc.html#jsonrpc_components_notify", [
        [ "notify_get_types", "jsonrpc.html#rpc_notify_get_types", [
          [ "Parameters", "jsonrpc.html#autotoc_md1380", null ],
          [ "Response", "jsonrpc.html#autotoc_md1381", null ],
          [ "Example", "jsonrpc.html#autotoc_md1382", null ]
        ] ],
        [ "notify_get_notifications", "jsonrpc.html#rpc_notify_get_notifications", [
          [ "Parameters", "jsonrpc.html#autotoc_md1383", null ],
          [ "Response", "jsonrpc.html#autotoc_md1384", null ],
          [ "Example", "jsonrpc.html#autotoc_md1385", null ]
        ] ]
      ] ],
      [ "Keyring", "jsonrpc.html#jsonrpc_components_keyring", [
        [ "keyring_file_add_key", "jsonrpc.html#rpc_keyring_file_add_key", [
          [ "Parameters", "jsonrpc.html#autotoc_md1386", null ],
          [ "Example", "jsonrpc.html#autotoc_md1387", null ]
        ] ],
        [ "keyring_file_remove_key", "jsonrpc.html#rpc_keyring_file_remove_key", [
          [ "Parameters", "jsonrpc.html#autotoc_md1388", null ],
          [ "Example", "jsonrpc.html#autotoc_md1389", null ]
        ] ],
        [ "keyring_get_keys", "jsonrpc.html#rpc_keyring_get_keys", [
          [ "Parameters", "jsonrpc.html#autotoc_md1390", null ],
          [ "Example", "jsonrpc.html#autotoc_md1391", null ]
        ] ],
        [ "keyring_linux_set_options", "jsonrpc.html#rpc_keyring_linux_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md1392", null ],
          [ "Example", "jsonrpc.html#autotoc_md1393", null ]
        ] ]
      ] ],
      [ "Linux Userspace Block Device (UBLK)", "jsonrpc.html#jsonrpc_components_ublk", [
        [ "ublk_create_target", "jsonrpc.html#rpc_ublk_create_target", [
          [ "Parameters", "jsonrpc.html#autotoc_md1394", null ],
          [ "Response", "jsonrpc.html#autotoc_md1395", null ],
          [ "Example", "jsonrpc.html#autotoc_md1396", null ]
        ] ],
        [ "ublk_destroy_target", "jsonrpc.html#rpc_ublk_destroy_target", [
          [ "Parameters", "jsonrpc.html#autotoc_md1397", null ],
          [ "Response", "jsonrpc.html#autotoc_md1398", null ],
          [ "Example", "jsonrpc.html#autotoc_md1399", null ]
        ] ],
        [ "ublk_start_disk", "jsonrpc.html#rpc_ublk_start_disk", [
          [ "Parameters", "jsonrpc.html#autotoc_md1400", null ],
          [ "Response", "jsonrpc.html#autotoc_md1401", null ],
          [ "Example", "jsonrpc.html#autotoc_md1402", null ]
        ] ],
        [ "ublk_recover_disk", "jsonrpc.html#rpc_ublk_recover_disk", [
          [ "Parameters", "jsonrpc.html#autotoc_md1403", null ],
          [ "Response", "jsonrpc.html#autotoc_md1404", null ],
          [ "Example", "jsonrpc.html#autotoc_md1405", null ]
        ] ],
        [ "ublk_stop_disk", "jsonrpc.html#rpc_ublk_stop_disk", [
          [ "Parameters", "jsonrpc.html#autotoc_md1406", null ],
          [ "Response", "jsonrpc.html#autotoc_md1407", null ],
          [ "Example", "jsonrpc.html#autotoc_md1408", null ]
        ] ],
        [ "ublk_get_disks", "jsonrpc.html#rpc_ublk_get_disks", [
          [ "Parameters", "jsonrpc.html#autotoc_md1409", null ],
          [ "Response", "jsonrpc.html#autotoc_md1410", null ],
          [ "Example", "jsonrpc.html#autotoc_md1411", null ]
        ] ]
      ] ],
      [ "Linux Network Block Device (NBD)", "jsonrpc.html#jsonrpc_components_nbd", [
        [ "nbd_start_disk", "jsonrpc.html#rpc_nbd_start_disk", [
          [ "Parameters", "jsonrpc.html#autotoc_md1412", null ],
          [ "Response", "jsonrpc.html#autotoc_md1413", null ],
          [ "Example", "jsonrpc.html#autotoc_md1414", null ]
        ] ],
        [ "nbd_stop_disk", "jsonrpc.html#rpc_nbd_stop_disk", [
          [ "Parameters", "jsonrpc.html#autotoc_md1415", null ],
          [ "Example", "jsonrpc.html#autotoc_md1416", null ]
        ] ],
        [ "nbd_get_disks", "jsonrpc.html#rpc_nbd_get_disks", [
          [ "Parameters", "jsonrpc.html#autotoc_md1417", null ],
          [ "Response", "jsonrpc.html#autotoc_md1418", null ],
          [ "Example", "jsonrpc.html#autotoc_md1419", null ]
        ] ]
      ] ],
      [ "Socket layer", "jsonrpc.html#jsonrpc_components_sock", [
        [ "sock_impl_get_options", "jsonrpc.html#rpc_sock_impl_get_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md1420", null ],
          [ "Response", "jsonrpc.html#autotoc_md1421", null ],
          [ "Example", "jsonrpc.html#autotoc_md1422", null ]
        ] ],
        [ "sock_impl_set_options", "jsonrpc.html#rpc_sock_impl_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md1423", null ],
          [ "Response", "jsonrpc.html#autotoc_md1424", null ],
          [ "Example", "jsonrpc.html#autotoc_md1425", null ]
        ] ],
        [ "sock_set_default_impl", "jsonrpc.html#rpc_sock_set_default_impl", [
          [ "Parameters", "jsonrpc.html#autotoc_md1426", null ],
          [ "Response", "jsonrpc.html#autotoc_md1427", null ],
          [ "Example", "jsonrpc.html#autotoc_md1428", null ]
        ] ],
        [ "sock_get_default_impl", "jsonrpc.html#rpc_sock_get_default_impl", [
          [ "Parameters", "jsonrpc.html#autotoc_md1429", null ],
          [ "Response", "jsonrpc.html#autotoc_md1430", null ],
          [ "Example", "jsonrpc.html#autotoc_md1431", null ]
        ] ]
      ] ],
      [ "Miscellaneous RPC commands", "jsonrpc.html#jsonrpc_components_misc", [
        [ "bdev_nvme_send_cmd", "jsonrpc.html#rpc_bdev_nvme_send_cmd", [
          [ "Parameters", "jsonrpc.html#autotoc_md1432", null ],
          [ "Response", "jsonrpc.html#autotoc_md1433", null ],
          [ "Example", "jsonrpc.html#autotoc_md1434", null ]
        ] ],
        [ "vmd_enable", "jsonrpc.html#rpc_vmd_enable", [
          [ "Parameters", "jsonrpc.html#autotoc_md1435", null ],
          [ "Response", "jsonrpc.html#autotoc_md1436", null ],
          [ "Example", "jsonrpc.html#autotoc_md1437", null ]
        ] ],
        [ "vmd_remove_device", "jsonrpc.html#rpc_vmd_remove_device", [
          [ "Parameters", "jsonrpc.html#autotoc_md1438", null ],
          [ "Example", "jsonrpc.html#autotoc_md1439", null ]
        ] ],
        [ "vmd_rescan", "jsonrpc.html#rpc_vmd_rescan", [
          [ "Parameters", "jsonrpc.html#autotoc_md1440", null ],
          [ "Response", "jsonrpc.html#autotoc_md1441", null ],
          [ "Example", "jsonrpc.html#autotoc_md1442", null ]
        ] ],
        [ "spdk_get_version", "jsonrpc.html#rpc_spdk_get_version", [
          [ "Parameters", "jsonrpc.html#autotoc_md1443", null ],
          [ "Response", "jsonrpc.html#autotoc_md1444", null ],
          [ "Example", "jsonrpc.html#autotoc_md1445", null ]
        ] ],
        [ "framework_get_pci_devices", "jsonrpc.html#rpc_framework_get_pci_devices", [
          [ "Parameters", "jsonrpc.html#autotoc_md1446", null ],
          [ "Response", "jsonrpc.html#autotoc_md1447", null ],
          [ "Example", "jsonrpc.html#autotoc_md1448", null ]
        ] ],
        [ "bdev_nvme_add_error_injection", "jsonrpc.html#rpc_bdev_nvme_add_error_injection", [
          [ "Parameters", "jsonrpc.html#autotoc_md1449", null ],
          [ "Response", "jsonrpc.html#autotoc_md1450", null ],
          [ "Example", "jsonrpc.html#autotoc_md1451", null ]
        ] ],
        [ "bdev_nvme_remove_error_injection", "jsonrpc.html#rpc_bdev_nvme_remove_error_injection", [
          [ "Parameters", "jsonrpc.html#autotoc_md1452", null ],
          [ "Response", "jsonrpc.html#autotoc_md1453", null ],
          [ "Example", "jsonrpc.html#autotoc_md1454", null ]
        ] ],
        [ "bdev_daos_create", "jsonrpc.html#rpc_bdev_daos_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md1455", null ],
          [ "Response", "jsonrpc.html#autotoc_md1456", null ],
          [ "Example", "jsonrpc.html#autotoc_md1457", null ]
        ] ],
        [ "bdev_daos_delete", "jsonrpc.html#rpc_bdev_daos_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md1458", null ],
          [ "Example", "jsonrpc.html#autotoc_md1459", null ]
        ] ],
        [ "bdev_daos_resize", "jsonrpc.html#rpc_bdev_daos_resize", [
          [ "Parameters", "jsonrpc.html#autotoc_md1460", null ],
          [ "Example", "jsonrpc.html#autotoc_md1461", null ]
        ] ],
        [ "iobuf_set_options", "jsonrpc.html#rpc_iobuf_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md1462", null ],
          [ "Example", "jsonrpc.html#autotoc_md1463", null ]
        ] ],
        [ "iobuf_get_stats", "jsonrpc.html#rpc_iobuf_get_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md1464", null ],
          [ "Example", "jsonrpc.html#autotoc_md1465", null ]
        ] ],
        [ "bdev_nvme_start_mdns_discovery", "jsonrpc.html#rpc_bdev_nvme_start_mdns_discovery", [
          [ "Parameters", "jsonrpc.html#autotoc_md1466", null ],
          [ "Example", "jsonrpc.html#autotoc_md1467", null ]
        ] ],
        [ "bdev_nvme_stop_mdns_discovery", "jsonrpc.html#rpc_bdev_nvme_stop_mdns_discovery", [
          [ "Parameters", "jsonrpc.html#autotoc_md1468", null ],
          [ "Example", "jsonrpc.html#autotoc_md1469", null ]
        ] ],
        [ "bdev_nvme_get_mdns_discovery_info", "jsonrpc.html#rpc_bdev_nvme_get_mdns_discovery_info", [
          [ "Parameters", "jsonrpc.html#autotoc_md1470", null ],
          [ "Example", "jsonrpc.html#autotoc_md1471", null ]
        ] ],
        [ "nvmf_publish_mdns_prr", "jsonrpc.html#rpc_nvmf_publish_mdns_prr", [
          [ "Parameters", "jsonrpc.html#autotoc_md1472", null ],
          [ "Example", "jsonrpc.html#autotoc_md1473", null ]
        ] ],
        [ "nvmf_stop_mdns_prr", "jsonrpc.html#rpc_nvmf_stop_mdns_prr", [
          [ "Parameters", "jsonrpc.html#autotoc_md1474", null ],
          [ "Example", "jsonrpc.html#autotoc_md1475", null ]
        ] ]
      ] ],
      [ "fsdev", "jsonrpc.html#jsonrpc_components_fsdev", [
        [ "fsdev_get_opts", "jsonrpc.html#rpc_fsdev_get_opts", [
          [ "Parameters", "jsonrpc.html#autotoc_md1476", null ],
          [ "Example", "jsonrpc.html#autotoc_md1477", null ]
        ] ],
        [ "fsdev_set_opts", "jsonrpc.html#rpc_fsdev_set_opts", [
          [ "Parameters", "jsonrpc.html#autotoc_md1478", null ],
          [ "Example", "jsonrpc.html#autotoc_md1479", null ]
        ] ],
        [ "fsdev_aio_create", "jsonrpc.html#rpc_fsdev_aio_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md1480", null ],
          [ "Example", "jsonrpc.html#autotoc_md1481", null ]
        ] ],
        [ "fsdev_aio_delete", "jsonrpc.html#rpc_fsdev_aio_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md1482", null ],
          [ "Example", "jsonrpc.html#autotoc_md1483", null ]
        ] ]
      ] ]
    ] ],
    [ "JSON-RPC Remote access", "jsonrpc_proxy.html", [
      [ "Parameters", "jsonrpc_proxy.html#autotoc_md676", null ],
      [ "Example usage", "jsonrpc_proxy.html#autotoc_md677", null ],
      [ "Returns", "jsonrpc_proxy.html#autotoc_md678", null ],
      [ "Client side", "jsonrpc_proxy.html#autotoc_md679", null ]
    ] ],
    [ "Userspace DTrace (USDT)", "usdt.html", [
      [ "Building bpftrace", "usdt.html#autotoc_md758", null ],
      [ "bpftrace.sh", "usdt.html#autotoc_md759", null ],
      [ "Configuring SPDK Build", "usdt.html#autotoc_md760", null ],
      [ "Start SPDK application and bpftrace script", "usdt.html#autotoc_md761", null ],
      [ "TODOs and known limitations", "usdt.html#autotoc_md762", null ]
    ] ],
    [ "Tracing Framework", "tracepoints.html", [
      [ "Introduction", "tracepoints.html#tracepoints_intro", null ],
      [ "Enabling Tracepoints", "tracepoints.html#enable_tracepoints", [
        [ "Enabling Tracepoints in Groups", "tracepoints.html#autotoc_md745", null ],
        [ "Enabling Individual Tracepoints", "tracepoints.html#autotoc_md746", null ],
        [ "Combining Tracepoint Masks", "tracepoints.html#autotoc_md747", null ],
        [ "Tracepoint Group Names", "tracepoints.html#autotoc_md748", null ],
        [ "Starting the SPDK Target", "tracepoints.html#autotoc_md749", null ]
      ] ],
      [ "Capturing a snapshot of events", "tracepoints.html#capture_tracepoints", null ],
      [ "Capturing sufficient trace events", "tracepoints.html#capture_trace_events", null ],
      [ "Clearing Trace History", "tracepoints.html#clear_trace_history", null ],
      [ "Querying Tracepoint Status", "tracepoints.html#query_tpoint_status", null ],
      [ "Adding New Tracepoints", "tracepoints.html#add_tracepoints", null ]
    ] ],
    [ "NVMe Multipath", "nvme_multipath.html", [
      [ "Introduction", "nvme_multipath.html#autotoc_md703", null ],
      [ "Design", "nvme_multipath.html#autotoc_md704", [
        [ "Multipath Mode", "nvme_multipath.html#autotoc_md705", null ],
        [ "Path Error Recovery", "nvme_multipath.html#autotoc_md706", null ],
        [ "Path Selection", "nvme_multipath.html#autotoc_md707", null ],
        [ "I/O Retry", "nvme_multipath.html#autotoc_md708", null ],
        [ "Asymmetric Namespace Accesses (ANA) Handling", "nvme_multipath.html#autotoc_md709", null ],
        [ "I/O Timeout", "nvme_multipath.html#autotoc_md710", null ]
      ] ],
      [ "Usage", "nvme_multipath.html#autotoc_md711", null ],
      [ "Limitations", "nvme_multipath.html#autotoc_md712", null ]
    ] ],
    [ "NVMe-oF Multipath HOWTO", "nvmf_multipath_howto.html", [
      [ "Build SPDK on both the initiator and target servers", "nvmf_multipath_howto.html#autotoc_md713", null ],
      [ "Setup hugepages", "nvmf_multipath_howto.html#autotoc_md714", null ],
      [ "On target: start and configure SPDK", "nvmf_multipath_howto.html#autotoc_md715", null ],
      [ "On initiator: start and configure bdevperf", "nvmf_multipath_howto.html#autotoc_md716", null ],
      [ "Launch a bdevperf test", "nvmf_multipath_howto.html#autotoc_md717", null ],
      [ "Switching paths", "nvmf_multipath_howto.html#autotoc_md718", null ],
      [ "Use round-robin (active_active) path load balancing", "nvmf_multipath_howto.html#autotoc_md719", null ]
    ] ],
    [ "Storage Management Agent", "sma.html", [
      [ "Interface", "sma.html#autotoc_md736", [
        [ "CreateDevice", "sma.html#autotoc_md737", null ],
        [ "DeleteDevice", "sma.html#autotoc_md738", null ],
        [ "AttachVolume", "sma.html#autotoc_md739", null ],
        [ "DetachVolume", "sma.html#autotoc_md740", null ],
        [ "SetQos", "sma.html#autotoc_md741", null ],
        [ "GetQosCapabilities", "sma.html#autotoc_md742", null ]
      ] ],
      [ "Running and Configuration", "sma.html#autotoc_md743", null ],
      [ "Plugins", "sma.html#autotoc_md744", null ]
    ] ],
    [ "ublk Target", "ublk.html", [
      [ "Table of Contents", "ublk.html#ublk_toc", null ],
      [ "Introduction", "ublk.html#ublk_intro", null ],
      [ "ublk Internal", "ublk.html#ublk_internal", [
        [ "Control Plane", "ublk.html#autotoc_md752", null ],
        [ "Data Plane", "ublk.html#autotoc_md754", null ]
      ] ],
      [ "SPDK Implementation", "ublk.html#ublk_impl", null ],
      [ "Operation", "ublk.html#ublk_op", [
        [ "Enabling SPDK ublk target", "ublk.html#autotoc_md755", null ],
        [ "Creating ublk block device", "ublk.html#autotoc_md756", null ],
        [ "Deleting ublk block device and exit", "ublk.html#autotoc_md757", null ]
      ] ]
    ] ]
];